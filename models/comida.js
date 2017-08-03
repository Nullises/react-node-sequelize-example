'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comida = sequelize.define('Comida', {
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
        Comida.belongsTo(models.Categoria);
      }
    }
  });
  return Comida;
};
