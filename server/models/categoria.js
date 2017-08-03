'use strict';
module.exports = function(sequelize, DataTypes) {
  var Categoria = sequelize.define('Categoria', {
    id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
    descripcion: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Categoria.hasMany(models.Comida);
      }
    }
  });
  return Categoria;
};
