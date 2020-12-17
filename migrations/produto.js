'use strict';

module.exports = {  
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sabor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      quantidade: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dataentrada: {
        allowNull: false,
        type: Sequelize.DATE
      },
      datavalidade: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
