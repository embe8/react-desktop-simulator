import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

export const Movie = sequelize.define('Movie', {
  movieId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  movieMedia: {
    type: DataTypes.STRING,
    allowNull: true
  },
  movieName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  movieDate: {
    type: DataTypes.STRING,
    allowNull: true
  },
  movieNotes: {
    type: DataTypes.STRING,
    allowNull: true
  }
});