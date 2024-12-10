import express from "express";
import mongoose from "mongoose";
import { videoRoutes } from "./Routes/video.routes.js";
import { userRoutes } from "./Routes/user.routes.js";
import { userComments } from "./Routes/comments.routes.js";
import bodyParser from "body-parser";
import cors from "cors"

const app = new express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(express.json());
mongoose.connect("mongodb+srv://Rahil:Rahil@cluster0.i3gvz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
                        
const db = mongoose.connection;

db.on("open", () => {
    console.log("connected")
})

app.listen(5100, () => {
    console.log("Running on port 5100");
})
videoRoutes(app)
userRoutes(app)
userComments(app)


