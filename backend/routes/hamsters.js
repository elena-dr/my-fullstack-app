  
const express = require('express')
const router = express.Router()

// Saknas: koppling till Firebase
// OBS: lägg till filen med Firebase-hemligheter i .gitignore
const data = []

// GET /fruits/
router.get('/', (req, res) => {
	res.send(data)
})


module.exports = router