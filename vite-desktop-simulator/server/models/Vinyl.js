import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

export const Vinyl = sequelize.define('Vinyl', {
  vinylId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  vinylMedia: {
    type: DataTypes.STRING,
    allowNull: true
  },
  vinylAlbum: {
    type: DataTypes.STRING,
    allowNull: false
  },
  vinylYear: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  vinylArtist: {
    type: DataTypes.STRING,
    allowNull: false
  },
  vinylNotes: {
    type: DataTypes.STRING,
    allowNull: true
  }
});
