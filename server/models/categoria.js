/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categoria', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'categoria'
  });
};
