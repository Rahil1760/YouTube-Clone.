import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique : true
    },
    videoId: {
        type : String,
    }
    
    
}, { Timestamp: true });

export default mongoose.model("videos", commentSchema);