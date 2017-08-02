//Dependencias
var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logFmt = require('logfmt');
var morgan = require('morgan');

//Definir puerto:
var server_port = process.env.PORT || 3000;

//Definir aplicación:
var app = express();

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
