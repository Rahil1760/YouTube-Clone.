import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
    },
    videoLink: {
        type: String,
        require: true
    },
    thumbnail: {
        type: String,
        require: true,
    },
    likes: {
        type: Number,
        default: 0
    },
    dislike: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const videoModel = mongoose.model('Video', videoSchema);

export default videoModel;