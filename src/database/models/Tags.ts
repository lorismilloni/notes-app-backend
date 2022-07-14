import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';

class Tags extends Model {
    id!: number;
    name!: string;
    userId!: number;
    campo!: string;
}

Tags.init({
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
    userId: {
        type: INTEGER,
        allowNull: false,
    },
    campo: {
        type: STRING,
        allowNull: true,
    },
    }, {
    sequelize: db,
    modelName: 'tags',
});

export default Tags;