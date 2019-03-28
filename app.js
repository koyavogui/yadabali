var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// importation de rest api module
//var expressNedbRest = require('express-nedb-rest');



// creation de base de donnée
var Datastore = require('nedb')
//const Admin = new Datastore({ filename: 'admin.db', autoload: true })
//const Marchand = new Datastore({ filename: 'marchand.db', autoload: true })
//const Apprenti = new Datastore({ filename: 'apprenti.db', autoload: true })
//const Maitre =  new Datastore({ filename: 'maitre.db', autoload: true })
const Recette = new Datastore({filenam : 'recette.db', autoload : true})
const Ingediant = new Datastore({filenam : 'ingrediant.db', autoload : true})
const CategorieRecette = new Datastore({filenam : 'categorie_recette.db', autoload : true})
const Commune = new Datastore({filenam : 'commune.db', autoload : true})
const User = new Datastore({
  filenam : path.join(__dirname,'dbs','user.db'), 
  autoload : true,
  inMemoryOnly:false
})

//const db = new Datastore({ filename: 'path/to/datafile', autoload: true });
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// configuration rest api 
//var rest_api = expressNedbRest()
//rest_api.addDatastore("admins",Admin);
//rest_api.addDatastore("marchants",Marchand);
//rest_api.addDatastore("apprentis",Apprenti);
//rest_api.addDatastore("maitres",Maitre);
//rest_api.addDatastore("recettes",Recette);
//rest_api.addDatastore("ingrediants",Ingediant);
//rest_api.addDatastore("categorie-recette",CategorieRecette);
//rest_api.addDatastore("communes",Commune);
//rest_api.addDatastore("users",User);




// configuration des dbs
app.set('userdb',User);
app.set('recettedb',Recette);
app.set('ingrediantdb',Ingediant);
app.set('categorierecettedb',CategorieRecette);
app.set('communedb',Commune);

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// configuration des fichier static
app.use('/public', express.static('public'));
app.use('/', express.static(path.join(__dirname,'vue_app','dist')));

// ajout de rest à express
//app.use("/api", rest_api);

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
