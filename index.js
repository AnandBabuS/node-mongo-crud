const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const module1 = require('./routes/module1')

const app = express()

/*
This is to configure CORS in our project

const cors = require('cors')
app.use(cors())

var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
} 

app.get('/route', cors(corsOptions), (request, response) => {
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


*/
const userName = process.env.dbUserName
const password = process.env.password

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/module1/v1', module1)

var mongoLink = 'mongodb://'+ userName +':'+password+'@ds133127.mlab.com:33127/asoft-db'

mongoose.connect(mongoLink)
mongoose.Promise = global.Promise

app.listen(process.env.port || 3000, () => {
    console.log('listening on 3000')
})
