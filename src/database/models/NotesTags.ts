import { Model, INTEGER } from 'sequelize';
import db from '.';

class NotesTags extends Model {
    id!: number;
    title!: number;
}

NotesTags.init({
    noteId: {
        type: INTEGER,
    },
    tagId: {
        type: INTEGER,
    },
    }, {
    sequelize: db,
    modelName: 'notes_tags',
});

export default NotesTags;