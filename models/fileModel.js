import { Schema, model, models } from "mongoose";

const fileSchema = new Schema({
    filename: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    mimetype: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user', // Reference to the User model
        required: true,
    },
}, { timestamps: true });

const FileModel = models.File || model('File', fileSchema);

export default FileModel;
