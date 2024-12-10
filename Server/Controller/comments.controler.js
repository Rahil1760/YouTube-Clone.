import commentModel from "../Model/comments.mode.js";
import userModel from "../Model/user.model.js";
import videoModel from "../Model/video.model.js";
export const addingComments = async (req, res) => {
    try {
    const { content } = req.body;
    const video = req.params.id
    const userId = req.user;
    const userDetails = await userModel.findOne({ username: userId })
    const user = userDetails._id 
    const newComment = new commentModel({
        content,
        user,
        video
    })
        const savedComment = await newComment.save()
        res.send(savedComment)
    } catch (error) {
        res.status(500).send(error || json({messege : "Internal server error"}))
    }
}
export const getCommentsByVideoId = async (req ,res) => {
    try {
        const id = req.params.id
        const fetchedComments = await commentModel.find({ video : id}).populate("user")
        res.send(fetchedComments)
   } catch (error) {
        res.status(500).send({messege : "internal server error"})
   }
}