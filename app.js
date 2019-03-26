var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var Datastore = require('nedb')
const Admin = new Datastore({ filename: 'admin.db', autoload: true })
const Marchand = new Datastore({ filename: 'marchand.db', autoload: true })
const Apprenti = new Datastore({ filename: 'apprenti.db', autoload: true })
const Maitre =  new Datastore({ filename: 'maitre.db', autoload: true })
const Recette = new Datastore({filenam : 'recette.db', autoload : true})
//const db = new Datastore({ filename: 'path/to/datafile', autoload: true });


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// configuration des dbs
app.set('admindb',Admin);
app.set('marchantdb',Marchand);
app.set('apprentidb',Apprenti);
app.set('maitredb',Maitre);
app.set('recettedb',Recette);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/public', express.static('public'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



console.log('Nombre de lecture')

module.exports = app;
