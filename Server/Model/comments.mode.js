import mongoose from "mongoose";
import { Schema } from "mongoose";

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video',
        required: true
    } 
}, {timestamps : true});

const commentModel = mongoose.model('Comment', commentSchema);

export default commentModel;
