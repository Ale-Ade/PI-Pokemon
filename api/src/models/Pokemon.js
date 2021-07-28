const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false, //* Campo obligatorio, no puede ser nulo este campo
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    attack: {
      type: DataTypes.INTEGER,
    },
    defense: {
        type: DataTypes.INTEGER,
    },
    speed: {
        type: DataTypes.INTEGER,
    },
    height: {
        type: DataTypes.INTEGER,
    },
    weight: {
        type: DataTypes.INTEGER,
    },
    sprite: {
        type: DataTypes.TEXT,
    },
    hp: {
      type: DataTypes.INTEGER,
    }

  }, 
  { 
    timestamps: false 
  }
  )};
  

