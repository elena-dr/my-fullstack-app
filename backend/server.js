// Importera paket
const express = require('express')
const app = express()
const cors = require('cors')

// Konfiguration
const PORT = 1337
const distPath = __dirname + '/../dist/'
console.log('distpath:', distPath)

// Middleware
app.use( cors() )
app.use( express.urlencoded({ extended: true }) )
app.use( express.static(distPath) )


// Endpoints
app.get('/', (req, res) => {
	console.log('Servern lever')
	res.send('Hello!')
})

app.listen(PORT, () => {
	console.log('Server listening on port ', PORT)
})