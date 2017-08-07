'use strict';
module.exports = function(sequelize, DataTypes) {
  var Categoria = sequelize.define('Categorias', {
    nombre: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Categoria.hasMany(models.Comida, {
          foreignKey: 'categoriaId',
          as: 'comidas',
        });
      }
    }
  });
  return Categoria;
};
