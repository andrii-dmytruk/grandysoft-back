import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db.js';

export const User = sequelize.define('user', {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  following: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
  },
  followers: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
  },
},
{
  tableName: 'user',
}
);
