'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  siswa.init({
    nis: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: {msg: 'Nis/Siswa sudah Tersedia!'},
      validate: {
        isNumeric: {
          args: true,
          msg:"Masukkan NIS dengan benar!"
        },
        notEmpty: {msg: 'NIS wajib di isi!'},
      }
    }, 
    nama: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: "Nama harus Berupa Character!"
        }
      }
    },
    kelas: DataTypes.STRING,
    jurusan: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: 'Email sudah Tersedia!'},
      validate: {
        isEmail: {msg: 'Data harus berupa Email!'},
        notEmpty: {msg: 'Masukkan Email!'},
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8, 100],
          msg: "Password minimal 8 karakter"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'siswa',
  });
  return siswa;
};