//Dependencias
var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logFmt = require('logfmt');
var morgan = require('morgan');
var routes = require('./routes/index.js');
var router = express.Router();

//Definir puerto:
var server_port = process.env.PORT || 3000;

//Definir aplicación:
var app = express();

//Definir carpetas estáticas a usar:
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/node_modules'));


//Definir middlewares:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


//CORS
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 res.setHeader('Cache-Control', 'no-cache');
 next();
});


//Rutas:
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});
app.use('/api', router);

//Manejo de errores:
//404
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
//Desarrollo
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
//Producción
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//Inicializar la aplicación:
init();

//Definir Inicialización:
function init() {
  app.listen(server_port, function() {
    console.log('La aplicación está corriendo en localhost:' + server_port);
  });
}

//Exportar módulo
module.exports = app;
