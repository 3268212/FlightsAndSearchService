'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define association here
    }
  }

  City.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false, // Specify allowNull for the `name` column
        unique: true,     // Specify unique constraint for the `name` column
      },
    },
    {
      sequelize,
      modelName: 'City',
    }
  );

  return City;
};
