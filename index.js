




import routes from './routes/routes.js';

var express =require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var app = express()
const port = 5000


//setup mongoose connections
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/restfuldb", {
    useNewUrlParser: true
});

//bodyParser setup

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next()
});

app.get('/', function(req, res) {
    res.send(`You successfuly ran API on port ${port}`)
})



routes(app);

app.listen(port)
