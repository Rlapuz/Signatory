import { Schema, model, models } from "mongoose";

const folderSchema = new Schema({
    name: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
}, { timestamps: true });

const FolderModel = models.Folder || model('Folder', folderSchema);

export default FolderModel;
