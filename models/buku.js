'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class buku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  buku.init({
    idSiswa: DataTypes.INTEGER,
    judul: DataTypes.STRING,
    penulis: DataTypes.STRING,
    penerbit: DataTypes.STRING,
    tahunRilis: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'buku',
  });
  return buku;
};