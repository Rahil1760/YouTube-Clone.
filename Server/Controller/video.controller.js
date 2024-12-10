import videoModel from "../Model/video.model.js";   
import userModel from "../Model/user.model.js";

export const AddVideos = async (req, res) => {
    try {
        const { title, description, videoLink, thumbnail, likes, dislikes } = req.body;

        // Get username from req.user
        const userName = req.user; // Ensure `req.user` contains `username`

        // Find the user by username
        const user = await userModel.findOne({ username: userName });
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        // Create a new video document
        const newVideo = new videoModel({
            userId: user,
            title,
            description,
            videoLink,
            thumbnail,
            likes: likes || 0, // Default to 0 if not provided
            dislikes: dislikes || 0, // Default to 0 if not provided
        });

        // Save the video
        const savedVideo = await newVideo.save();

        // Respond with the saved video
        res.status(201).json(savedVideo);
    } catch (err) {
        console.error("Error in AddVideos:", err);
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
};



export const getAllVideo = async (req, res) => {
    
    try {
        console.log("block")
        // Populate the correct field name
        const allVideos = await videoModel.find().populate('userId');
        
        // Respond with the populated videos
        res.send(allVideos)
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
};
export const getVideoById = async (req, res) => {
    try {
         const videoId = req.params.id
        const videoById = await videoModel.findById( videoId ).populate('userId')
        res.send(videoById)
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
} 

export const getVideoByUser = async (req ,res) => {
    try {
        const userId = req.params.userId
        const userVideos = await videoModel.find({ userId: userId }).populate('userId')
        if (!userVideos) {
            res.send(json({messege : "This user has not uploaded any video"}))
        }
        res.send(userVideos)
    } catch (error) {
         res.status(500).json({ message: "Internal server error", error: err.message });
    }
}

