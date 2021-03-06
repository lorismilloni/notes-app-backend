import { Model, INTEGER, STRING, DATE, DataTypes } from 'sequelize';
import db from '.';

class Users extends Model {
  id!: number;
  name!: string;
  lastname!: string;
  email!: string;
  passwordHash!: string;
  avatar!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

Users.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  lastname: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  passwordHash: {
    type: STRING,
    allowNull: false,
  },
  avatar: {
    type: STRING,
    allowNull: true,
    defaultValue: 'https://img.icons8.com/stickers/100/000000/test-account.png',
  },
  createdAt: {
    type: DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: true,
});

export default Users;