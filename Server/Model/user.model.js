import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    channelName: {
        type: String,
        require : true  
    },
    username:
    {
        type: String,
        required: true,
        unique: true
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
        require : true
    }
}, {timestamps : true},);

const userModel = mongoose.model('User', userSchema);

export default userModel;
