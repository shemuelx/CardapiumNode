'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     *
    */

    await queryInterface.bulkInsert('Produtos', 
    [{
      nome: 'coxinha',
      sabor: 'frango',
      quantidade: 50,
      dataentrada: new Date(),
      datavalidade: new Date()      
    }, {
      nome: 'sandwich',
      sabor: 'presunto',
      quantidade: 20,
      dataentrada: new Date(),
      datavalidade: new Date()      
    }, {
      nome: 'coxinha',
      sabor: 'costela',
      quantidade: 150,
      dataentrada: new Date(),
      datavalidade: new Date()      
    }, {
      nome: 'esfiha',
      sabor: 'espinafre',
      quantidade: 20,
      dataentrada: new Date(),
      datavalidade: new Date()
    }, {
      nome: 'quibe',
      sabor: 'carne',
      quantidade: 50,
      dataentrada: new Date(),
      datavalidade: new Date()
    }, {
      nome: 'bolinho',
      sabor: 'bacalhau',
      quantidade: 630,
      dataentrada: new Date(),
      datavalidade: new Date()
    }, {
      nome: 'empada',
      sabor: 'camarao',
      quantidade: 410,
      dataentrada: new Date(),
      datavalidade: new Date()
    }, {
      nome: 'pao de queijo',
      sabor: 'queijo',
      quantidade: 200,
      dataentrada: new Date(),
      datavalidade: new Date()
    }, {
      nome: 'hamburguer',
      sabor: 'x-bacon',
      quantidade: 1000,
      dataentrada: new Date(),
      datavalidade: new Date()
    }, {
      nome: 'joelho',
      sabor: 'presunto',
      quantidade: 5520,
      dataentrada: new Date(),
      datavalidade: new Date()
    }, {
      nome: 'empada',
      sabor: 'queijo',
      quantidade: 700,
      dataentrada: new Date(),
      datavalidade: new Date()
    }, {
      nome: 'coxinha',
      sabor: 'catupiry',
      quantidade: 40,
      dataentrada: new Date(),
      datavalidade: new Date()
    }, {
      nome: 'sandwiche',
      sabor: 'peito peru',
      quantidade: 200,
      dataentrada: new Date(),
      datavalidade: new Date()
    }, {
      nome: 'hamburguer',
      sabor: 'x-tudo',
      quantidade: 200,
      dataentrada: new Date(),
      datavalidade: new Date()
    }, {
      nome: 'esfiha',
      sabor: 'queijo',
      quantidade: 200,
      dataentrada: new Date(),
      datavalidade: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}