const { DataTypes } = require('sequelize');
const sequelize = require('../models/index').sequelize;
const Siswa = require('../models/siswa')(sequelize, DataTypes);

module.exports = {
    Siswa
}