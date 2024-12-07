import userModel from "../Model/user.model.js";


export function addUser(req, res , next ) {
    const { channelName , username, password, about , profilePic } = req.body;

    const newUser = new userModel({
        channelName,
        username,
        password,
        about,
        profilePic
    
    })
    newUser.save().then(data => {
        if (!data) {
            res.status(404).send(json({ messege: "user not found" }));
        }
    }).catch(err => {
        res.status(500).send(err);
    })
    next()
}