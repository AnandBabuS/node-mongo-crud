const express = require('express')
const Model1 = require('../models/model1')
const router = express.Router()

router.get('/artifact', (req, res) => {
    Model1.find({}).then( (models) => {
        res.send(models)
    })
})

router.post('/artifact', (req, res) => {
   /* const data = new Model1(req.body)
    data.save() */
    // the above can be done as 
    Model1.create(req.body).then(() => {
        res.send('Saved the data')
    })
})

router.put('/artifact/:id', (req, res) => {
    Model1.findByIdAndUpdate({
        _id: req.params.id
    }, req.body).then(() => {
        res.send('updated')
    })
})

router.delete('/artifact/:id', (req, res) => {
    Model1.findByIdAndRemove({
        _id: req.params.id
    }).then(() => {
        res.send('deleted')
    })
})  

module.exports = router