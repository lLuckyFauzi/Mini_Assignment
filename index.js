const express = require('express');
const app = express();
const port = 3000;
const siswaRouter = require('./Router/siswa')

app.use(express.json())
app.use(siswaRouter)

app.listen(port, () => console.log(`Listenin Port ${port}`))


module.exports = app;