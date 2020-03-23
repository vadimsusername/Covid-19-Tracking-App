module.exports = function(sequelize, DataTypes) {
    var Stat = sequelize.define("Stat", {
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      confirmed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deaths: {
          type: DataTypes.INTEGER,
          allowNull: false
      }
    });
    return Stat;
  };