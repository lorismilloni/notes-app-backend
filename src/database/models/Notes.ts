import { Model, INTEGER, STRING, DATE, DataTypes } from 'sequelize';
import db from '.';

class Notes extends Model {
    id!: number;
    title!: string;
    content!: string;
    userId!: number;
    createdAt!: Date;
    updatedAt!: Date;
}

Notes.init({
    id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: STRING,
        allowNull: false,
    },
    content: {
        type: STRING,
        allowNull: false,
    },
    userId: {
        type: INTEGER,
        allowNull: false,
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
    modelName: 'notes',
    timestamps: true,
});

export default Notes;