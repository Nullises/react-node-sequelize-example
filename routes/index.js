var express = require('express');
var router = express.Router();
var models = require('../server/models/index');

//Pagina inicial
router.get('/', function(req, res, next) {
  res.json({ message: 'API Initialized!'});
});

//Ingresar Categorías
router.post('/categoria', function(req, res) {
  models.Categorias.create({
    nombre: req.body.nombre
  }).then(function(categoria) {
    res.json(categoria);
  });
})

//Buscar todas las categorias
router.get('/getCategorias', function(req, res){
  models.Categorias.findAll({}).then(function(getCategorias) {
    res.json(getCategorias);
  });
});


//Buscar una sola categoria
router.get('/categoria/:id', function(req, res) {
  models.Categorias.find({
    where: {
      id: req.params.id
    }
  }).then(function(idCategoria) {
    res.json(idCategoria);
  });
});

//Borrar una sola categoria
router.delete('/categoria/delete/:id', function(req, res) {
  models.Categorias.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(deleteCategoria) {
    res.json(deleteCategoria);
  });
});

//Ingresar comida
router.post('/comida/post/:categoriaId', function(req, res) {
  models.Comidas.create({
    where: {
      categoriaId: req.params.categoriaId
    },
    nombre: req.body.nombre
  }).then(function(comida) {
    res.json(comida);
  });
})

//Buscar todos las comidas
router.get('/getComidas', function(req, res){
  models.Comidas.findAll({}).then(function(getComidas) {
    res.json(getComidas);
  });
});


//Buscar una sola comida
router.get('/comida/get/:id', function(req, res) {
  models.Comidas.find({
    where: {
      id: req.params.id
    }
  }).then(function(idComida) {
    res.json(idComida);
  });
});

//Borrar una sola comida
router.delete('/comida/delete/:id', function(req, res) {
  models.Comidas.destroy({
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
