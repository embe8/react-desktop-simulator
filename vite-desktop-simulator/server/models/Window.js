import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

export const Window = sequelize.define('Window', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING },
});