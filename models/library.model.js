import mongoose from "mongoose";


const librarySchema = new mongoose.Schema({
    name: String,
    books: Number,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "owner",
        unique: true,
        required: true,
    }
}, { timestamps: true })

export const libraryModel = mongoose.model('library', librarySchema);
