const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const Produto = require('./models/produto')

const app = express()
const sequelize = new Sequelize({ dialect: 'sqlite', storage: './produtos.db' })
const produtos = Produto(sequelize, DataTypes)

// Precisamos parse JSON vindo dos requests
app.use(express.json())

// Listar produtos
app.get('/produtos',  async (req, res) => {
  const todos = await produtos.findAll()
  res.json({produtos: todos}) 
})

// Create produto
app.post('/produto', async (req, res) => {
  const body = req.body
  const produto = produtos.create(body)

  res.json({produto})
})

// Show produto
app.get('/produto/:id', async (req, res) => {   
  const produto = await produtos.findByPk(req.params.id)
  res.json({produto})
})

// Update produto
app.put('/produto/:id', async (req, res) => {
  const id = req.params.id 
  const body = req.body
  const produto = await produtos.findByPk(id)

  if (produto) {
    await produto.update({ ...body })
      res.send({ produto })
  } else {
      res.status(404)
      res.send({ message: 'produto not found' })
  }

  res.send({ action: 'Updating produto', produtoId: id })
})

// Delete produto
app.delete('/produto/:id', async (req, res) => {
  const id = req.params.id   
  const produto = await produtos.findByPk(id)

  if (produto) {
    await produto.destroy()
      res.send({ produto })
  } else {
      res.status(404)
      res.send({ message: 'produto not found' })
  }

})

// Server listening message
app.listen(3000, () => {
  console.log('Iniciando o ExpressJS na Porta 3000')
})
