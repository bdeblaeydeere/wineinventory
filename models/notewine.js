'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NoteWine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  NoteWine.init({
    wineId: DataTypes.INTEGER,
    noteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NoteWine',
  });
  return NoteWine;
};