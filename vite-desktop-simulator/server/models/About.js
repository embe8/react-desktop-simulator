import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

export const About = sequelize.define('About', {
  aboutId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  aboutMedia: {
    type: DataTypes.STRING,
    allowNull: true
  },
  aboutName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  aboutNotes: {
    type: DataTypes.STRING,
    allowNull: false
  }
});