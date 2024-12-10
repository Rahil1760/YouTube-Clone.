import userModel from "../Model/user.model.js";


import bcrypt from 'bcrypt'; // For password hashing


export const setUpNewUser = async (req, res , next) => {
    try {
        // Destructure and validate the required fields
        const { channelName, username, password, about, profilePic } = req.body;

        if (!channelName || !username || !password) {
            return res.status(400).json({ message: "Channel Name, Username, and Password are required" });
        }

        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new userModel({
            channelName,
            username,
            password: hashedPassword,
            about,
            profilePic
        });

        // Save the user to the database
          await user.save();
            next();
        // Respond with the newly created user (excluding password)
       
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Failed to create user", error: error.message });
    }
    
};
      
