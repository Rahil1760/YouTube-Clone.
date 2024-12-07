import { AddVideos } from "../Controller/video.controller.js"
import { getAllVideo } from "../Controller/video.controller.js";
import { permissionGranted } from "../Controller/userAuth.controler.js";
import { getVideoById } from "../Controller/video.controller.js";
import { getVideoByUser } from "../Controller/video.controller.js";
export const videoRoutes = (app) => {
    app.get("/api/getAllVideo",permissionGranted, getAllVideo);
    app.post("/api/addnewvideo", permissionGranted, AddVideos);
    app.get("/api/getVideoById/:id", getVideoById);
    app.get("/api/getChannelVideos/:userId" , getVideoByUser)
}

//{
//  "token": "eyJhbGciOiJIUzI1NiJ9.emFzeGFhbnZpenVmZG52.m9oIrkNlKtRzNnelKTzjRo2AlFDgn2CVIiyAQCKVw10"
//}