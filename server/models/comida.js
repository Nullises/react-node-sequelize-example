/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comida', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categoria',
        key: 'id'
      }
    }
  }, {
    tableName: 'comida'
  });
};
