import { Schema, model, models } from "mongoose";

const folderShcema = new Schema({
    name: String,
}, { timestamps: true });


const FolderModel = models.Folder || model('Folder', folderShcema)

export default FolderModel;