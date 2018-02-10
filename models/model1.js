const mongoose = require('mongoose')

const Schema = mongoose.Schema

const model1Schema = new Schema({
    elementText: {
        type: String,
        required: [true, 'element1 is required']
    },
    elementCombo: {
        type: String,
        required: [true, 'elementCombo is required']
    },
    elementTextArea: {
        type: String,
        required: [true, 'elementCombo is required']
    },
    elementMultiselect: {
        type: String,
    },
    elementBoolean: {
        type: Boolean,
        default: false,
    }
})

const Model1 = mongoose.model('Model1', model1Schema)

module.exports = Model1