// const express = require('express')
import express from 'express'
import hamsterController from '../controllers/hamsterController.js'
var router = express.Router()


// Data hämtas från Firestore!

router.get('/', hamsterController.getAll)
router.get('/random', hamsterController.getRandom)
router.get('/:id', hamsterController.getById)
router.post('/', hamsterController.postHam)
router.put('/:id', hamsterController.putHam)
router.delete('/:id', hamsterController.deleteHam)


module.exports.router = router