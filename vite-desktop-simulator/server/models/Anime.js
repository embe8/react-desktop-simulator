import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

export const Anime = sequelize.define('Anime', {
  animeId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  animeMedia: {
    type: DataTypes.STRING,
    allowNull: true
  },
  animeName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  animeDate: {
    type: DataTypes.STRING,
    allowNull: true
  }
});