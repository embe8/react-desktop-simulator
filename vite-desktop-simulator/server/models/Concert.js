import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

export const Concert = sequelize.define('Concert', {
  concertId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  concertMedia: {
    type: DataTypes.STRING,
    allowNull: true
  },
  concertName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  concertDate: {
    type: DataTypes.STRING,
    allowNull: true
  },
});
