const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const Produto = require('./models/produto')

const app = express()
const sequelize = new Sequelize({ dialect: 'sqlite', storage: './produtos.db' })
const produtos = Produto(sequelize, DataTypes)

// Prcisamos parse JSON vindo dos requests
app.use(express.json())

// Listar produtos
app.get('/produtos', (req, res) => {
  produtos.findAll().then(produtos => {
    res.json({produtos})
  })  
})

// Create produto
app.post('/produto', (req, res) => {
  var body = req.body

  res.json(body)
})

// Show produto
app.get('/produto/:id', async (req, res) => {   
  var produto = await produtos.findByPk(req.params.id)
  res.json({produto})
})

// Update produto
app.put('/produto/:id', (req, res) => {
  var id = req.params.id

  res.send({ action: 'Updating produto', produtoId: id })
})

// Delete produto
app.delete('/produto/:id', (req, res) => {
  const produtoId = req.params.id

  res.send({ action: 'Deleting produto', produtoId: produtoId })
})

// Server listening message
app.listen(3000, () => {
  console.log('Iniciando o ExpressJS na Porta 3000')
})

 
// Find a produto by Id
exports.findById = (req, res) => {  
  produto.findById(req.params.produtoid).then(produto => {
    res.send(produto);
  })
};
 
// Delete a produto by Id
exports.delete = (req, res) => {
  const id = req.params.produtoid;
  produto.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send(`deleted successfully produto id ${id}`);
  });
};