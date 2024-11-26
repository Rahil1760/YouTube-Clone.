import express from "express";
import mongoose from "mongoose";
import { videoRoutes } from "./Routes/video.routes.js";
import { userRoutes } from "./Routes/user.routes.js";
const app = new express();

mongoose.connect("mongodb+srv://Rahil:Rahil@cluster0.i3gvz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
const db = mongoose.connection;

db.on("open", () => {
    console.log("connected")
})

app.listen(5100, () => {
    console.log("Running on port 5100");
})
app.use(express.json());
videoRoutes(app)
userRoutes(app)