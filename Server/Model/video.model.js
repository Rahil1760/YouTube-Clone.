import mongoose, { Schema } from "mongoose";

const videoSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique : true
    },
    videoTitle: {  
        type: String,
        required: true,
        unique : true
    },
    videoDescription : {
        type: String,
        required: true,
        unique : true
    },
    imgUrl :{
        type: String,
        required: true,
    },
    views: {
        type: Number,
        defaut : 0
    },
    tags: {
        type : [String],
    },
    dislikes: {
        type : Number
    },
    likes: {
        type : Number
    }
    
}, { Timestamp: true });

const videoModel = mongoose.model("videos", videoSchema);

export default videoModel;