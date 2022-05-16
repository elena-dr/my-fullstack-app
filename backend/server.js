// Importera paket
const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const fruitsRouter = require('./routes/fruits.js')

// Konfiguration
const PORT = 1337
const distPath = path.join(__dirname, '/../dist/')
console.log('distpath:', distPath)



// Middleware
app.use( cors() )
app.use( express.urlencoded({ extended: true }) )
app.use(express.static(distPath)) // '/' ->> dist/index.html

//'/img/hamster-14.jpg' ->> local images './hamsterImages/hamster-14.jpg
app.use('/img', express.static(path.join(__dirname, './hamsterImages/')))


// Endpoints
app.use('/fruits', fruitsRouter)
//Saknas: /hamsters, /matches



app.listen(PORT, () => {
	console.log('Server listening on port ', PORT)
})