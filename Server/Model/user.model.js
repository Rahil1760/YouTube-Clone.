import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    channelName: {
        type: String,
        require: true,
        unique : true
    },
    username:
    {
        type: String,
        required: true,
        unique : true
    },
    password: {
        type: String,
        required: true
    },
    about: {
        type: String,
        require : true   
    },
    profilePic: {
        type: String,
        default : "https://asset.cloudinary.com/dwbdkd28k/74332d9c211a0945c38ee54bec746172"
    }
}, {timestamps : true},);

const userModel = mongoose.model('User', userSchema);

export default userModel;
