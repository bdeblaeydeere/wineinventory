'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Wine.belongsTo(models.Country, {foreignKey: "countryId"})
      Wine.belongsTo(models.Producer, {foreignKey: "producerId"})
      Wine.belongsTo(models.Seller, {foreignKey: "sellerId"})
      Wine.belongsToMany(models.Note, {
        through: "NoteWine",
        foreignKey: "wineId",
        otherKey: "noteId",
      });
    }
  };
  Wine.init({
    name: DataTypes.STRING,
    producerId: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    price: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    tastingId: DataTypes.INTEGER,
    rating: DataTypes.STRING,
    color: DataTypes.STRING,
    countryId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    generalNotes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Wine',
  });
  return Wine;
};