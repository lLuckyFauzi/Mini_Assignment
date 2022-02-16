const express = require('express');
const router = express.Router();
const middleware = require('../Middleware/authentticate')
const siswaController = require('../Controller/siswa');

router.post('/createSiswa', siswaController.createSiswa);

router.get('/getSiswa', siswaController.getSiswa);

router.put('/updateSiswa', siswaController.updateSiswa);

router.delete('/deleteSiswa', siswaController.deleteSiswa);

router.post('/login', siswaController.login);

router.post('/register', middleware.authentication, siswaController.register)

module.exports = router;