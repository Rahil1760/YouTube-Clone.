import mongoose, { Schema, trusted } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique : true
        
    },
    password: {
        type: String,
        require: true,
    },
    subscriber: {
        type: Number,
        default: 0,
    },
    subscribedUsers: {
        type: [String]
    }



}, { Timestamp: true });

const userModel = mongoose.model("User", userSchema);

export default userModel;