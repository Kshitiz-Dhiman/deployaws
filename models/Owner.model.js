import mongoose from "mongoose";

const OwnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    library: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "library"
  },
    image : {
        type : String,
    },
    gender : {
        type : String,
        enum : ["M" , "F" , "O"],
    }
}, { timestamps: true });

export const OwnerModel = mongoose.model("owner" , OwnerSchema);
