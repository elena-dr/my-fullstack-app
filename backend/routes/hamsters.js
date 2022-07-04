// const express = require('express')

import express from 'express'
// const hamsterController = require('../controllers/hamsterController.js')
import hamsterController from '../controllers/hamsterController.js'
const router = express.Router()


// Data hämtas från Firestore!

router.get('/', hamsterController.getAll)
router.get('/random', hamsterController.getRandom)
router.get('/:id', hamsterController.getById)
router.post('/', hamsterController.postHam)
router.put('/:id', hamsterController.putHam)
router.delete('/:id', hamsterController.deleteHam)


export default router