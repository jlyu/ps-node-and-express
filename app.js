var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
var nav =  [ {Link:'/Books', Text:'Book'}, { Link:'/Authors', Text:'Author'} ];
var bookRouter  = require('./src/routes/bookRoutes')(nav);  //express.Router();
var adminRouter = require('./src/routes/adminRoutes')(nav);

app.use(express.static('public'));
//app.use(express.static('src/views'));
app.set('views', './src/views');
app.set('view engine', 'ejs'); //'jade','.hbs'

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);

app.get('/', function(req, res) {
    res.render('index', {
        title: 'hello handlebars',
        nav: [ {Link:'/Books', Text:'Books'}, { Link:'/Authors', Text:'Authors'} ]
    });
    //res.send('Hello World!');
});

app.get('/books', function(req, res) {
    res.send('Hello Books');
});

app.listen(port, function(err) {
    console.log('running server on port: ' + port);
});

