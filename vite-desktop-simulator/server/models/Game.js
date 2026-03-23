import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

export const Game = sequelize.define('Game', {
  gameId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  gameMedia: {
    type: DataTypes.STRING,
    allowNull: true
  },
  gameName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gameDate: {
    type: DataTypes.STRING,
    allowNull: true
  },
  gameNotes: {
    type: DataTypes.STRING,
    allowNull: true
  }
});
