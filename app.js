var express = require('express');

var app = express();
var port = process.env.PORT || 5000;
var nav =  [ {Link:'/Books', Text:'Book'}, { Link:'/Authors', Text:'Author'} ];
var bookRouter = require('./src/routes/bookRoutes')(nav);  //express.Router();

app.use(express.static('public'));
//app.use(express.static('src/views'));
app.set('views', './src/views');
app.set('view engine', 'ejs'); //'jade','.hbs'

app.use('/books', bookRouter);

app.get('/', function(req, res) {
    res.render('index', {
        title: 'hello handlebars',
        list: ['a', 'b'],
        nav: [ {Link:'/Books', Text:'Books'}, { Link:'/Authors', Text:'Authors'} ]
    });  //send('Hello World!');
});

app.get('/books', function(req, res) {
    res.send('Hello Books');
});

app.listen(5000, function(err) {
    console.log('running server on port: ' + port);
});

