'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comida = sequelize.define('Comidas', {
    nombre: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Comida.belongsTo(models.Categoria, {
          foreignKey: 'categoriaId',
          onDelete: 'CASCADE',
        });
      }
    }
  });
  return Comida;
};
