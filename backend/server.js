// Importera paket
import path from 'path'
import express from 'express'
import cors from 'cors'
import router from './routes/hamsters.js'
const app = express()
 
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Konfiguration
const PORT = process.env.PORT || 1433
const distPath = path.join(__dirname, '/../dist/')

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static(distPath)) // '/' ->> dist/index.html
app.use('/img', express.static(path.join(__dirname, './hamsterImages/')))

//Logger
app.use((req, res, next) => {
	console.log(`Logger: ${req.method}  ${req.url} `, req.body)
	next()
  })

// Endpoints
app.use('/hamsters', router)

app.listen(PORT, () => {
	console.log('Server listening on port ', PORT)
})