module.exports = function(sequelize, DataTypes) {
    var Search = sequelize.define("Search", {
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      searched: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
    return Search;
  };