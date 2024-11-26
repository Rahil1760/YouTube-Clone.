import userModel from "../Model/user.model.js";

export function addUser(req, res) {
    const { userName, email, password } = req.body;

    const newUser = new userModel({
        userName,
        email,
        password
    })
    newUser.save().then(data => {
        if (!data) {
            req.status(404).send(json({ messege: "user not found" }));
        }
        else {
            res.send(data);
        }
    }).catch(err => {
        res.status(500).send(err || "internal server Error");
    })
    
}