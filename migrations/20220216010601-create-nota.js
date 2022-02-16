'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('nota', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idSiswa: {
        type: Sequelize.INTEGER
      },
      idBuku: {
        type: Sequelize.INTEGER
      },
      waktuPinjam: {
        type: Sequelize.DATE
      },
      waktuPengembalian: {
        type: Sequelize.DATE
      },
      namaBuku: {
        type: Sequelize.STRING
      },
      hariTerlambat: {
        type: Sequelize.INTEGER
      },
      denda: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('nota');
  }
};