'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Note.belongsToMany(models.Wine, {
        through: "NoteWine",
        foreignKey: "noteID",
        otherKey: "wineID",
      });
    }
  };
  Note.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Note',
  });
  return Note;
};