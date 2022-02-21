const jwt = require('jsonwebtoken')

const db = require('../Helper/relation');
const { Siswa } = db

module.exports = {
    createSiswa: async (req, res) => {
        try {
            const name = req.body.nama
            const data = await Siswa.create({
                nis: req.body.nis,
                nama: req.body.nama,
                kelas: req.body.kelas,
                jurusan: req.body.jurusan,
                email: req.body.email,
                password: req.body.password,
            })
            res.status(200).json({message: `Siswa ${name} created!`, data})
        } catch (error) {
            console.log(error.errors)
            if(error.errors[1]){
                return res.status(422).json({Message: error.errors[1].message})
            }   
            else if(error.errors[2]){
                return res.status(422).json({Message: "Minimal 8 karakter!"})
            }   
            res.status(422).json({Message: error.errors[0].message})
        }
    },

    getSiswa: async (req, res) => {
        try {
            const data = await Siswa.findAll({
                attributes: ['id','nis', 'nama', 'kelas', 'jurusan','email']
            })
            if(!data){
                res.status(404).json({message: 'No data!'})
            }
            res.json({data})
        } catch (error) {
            res.status(404).json({message: 'Method Error!'})
        }
    },

    updateSiswa: async (req, res) => {
        try {
            const data = await Siswa.update({
                nis: req.body.nis,
                nama: req.body.nama,
                kelas: req.body.kelas,
                jurusan: req.body.jurusan,
                email: req.body.email,
                password: req.body.email,
            },{
                where: {nama: req.query.nama}
            })
            if(!data) {
                res.status(404).json({message: 'Siswa Not Found!'})
            }
            res.status(200).json({message: `Siswa Succesfull to update!`})
        } catch (error) {
            res.status(422).json({message: error.message})
        }
    },

    deleteSiswa: async (req, res) => {
        try {
            const nama = req.body.nama
            const data = await Siswa.destroy({
                where: {nama: req.query.nama}
            })
            if(!data){
                res.status(404).json({message: 'Siswa not found!'})
            }
            res.status(200).json({message: `Siswa ${nama} succesfull to delete`})
        } catch (error) {
            res.status(422).json({message: error.message})
        }
    },

    login: async (req, res) => {
        try {
            const nis = req.body.nis;
            const nama = req.body.nama;

            const data = await Siswa.findOne({
                where: {nama: req.body.nama}
            })
            if(!data) {
                throw Error('Data Not Found')
            }   
             
            const payload = {
                nama: nama,
                nis: nis,
            }
            const token = jwt.sign(payload, "ehehehey")
            res.json({
                       message: `Hello ${nama}`,
                       nis: data.nis, 
                       token: token })
        } catch (error) {   
            res.json({message: error.message})
        }
    },

    register: async (req, res) => {
        try {
            const nama = req.body.nama;
            const data = await Siswa.findOne({
                where: {nama: nama}
            })
            res.json({ message: `Hello ${nama}`,
                       nis: data.nis, 
                       kelas: data.kelas })
        } catch (error) {
            res.status(422).json({message: error.sqlMessage})
        }
    }


}