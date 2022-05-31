// Importera paket
const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const hamstersRouter = require('./routes/hamsters')

// Konfiguration
const PORT = process.env.PORT || 433
const distPath = path.join(__dirname, '/../dist/')

// Middleware
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static(distPath)) // '/' ->> dist/index.html


app.use('/img', express.static(path.join(__dirname, './hamsterImages/')))


// Endpoints
app.use('/hamsters', hamstersRouter)

app.listen(PORT, () => {
	console.log('Server listening on port ', PORT)
})