const express = require('express')

const router = express.Router()

router.get('/artifact', (req, res) => {
    res.send('/arti get')
})

router.post('/artifact', (req, res) => {
    res.send('/arti post')
})

router.put('/artifact/:id', (req, res) => {
    res.send('/arti put')
})

router.delete('/artifact/:id', (req, res) => {
    res.send('/arti delete')
})  

module.exports = router