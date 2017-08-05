var express = require('express');
var router = express.Router();
var models = require('../server/models/index');

//Pagina inicial
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Ingresar Categorías
router.post('/categoria', function(req, res) {
  models.Categoria.create({
    nombre: req.body.nombre
  }).then(function(categoria) {
    res.json(categoria);
  });
})

//Buscar todos las Categorías
router.get('/getCategorias', function(req, res){
  models.Categoria.findAll({}).then(function(getCategorias) {
    res.json(getCategorias);
  });
});


//Buscar una sola Categoría
router.get('/categoria/:id', function(req, res) {
  models.Categoria.find({
    where: {
      id: req.params.id
    }
  }).then(function(idCategoria) {
    res.json(idCategoria);
  });
});

//Borrar un solo empleado
router.delete('/categoria/:id', function(req, res) {
  models.Categoria.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(deleteCategoria) {
    res.json(deleteCategoria);
  });
});

//Ingresar Comidas
router.post('/comida', function(req, res) {
  models.Comida.create({
    nombre: req.body.nombre
  }).then(function(comida) {
    res.json(comida);
  });
})

//Buscar todos las Categorías
router.get('/getComidas', function(req, res){
  models.Comida.findAll({}).then(function(getComidas) {
    res.json(getComidas);
  });
});


//Buscar una sola Categoría
router.get('/comida/:id', function(req, res) {
  models.Comida.find({
    where: {
      id: req.params.id
    }
  }).then(function(idComida) {
    res.json(idComida);
  });
});

//Borrar un solo empleado
router.delete('/comida/:id', function(req, res) {
  models.Comida.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(deleteComida) {
    res.json(deleteComida);
  });
});


//Comprobar conexión a DB
models.sequelize.authenticate().then(function(err) {
    console.log('La conexión a Base de Datos se ha establecido correctamente');
}).catch(function (err) {
    console.log('Imposible conectarse a Base de Datos:', err);
});


module.exports = router;
