import { addingComments } from "../Controller/comments.controler.js"
import { permissionGranted } from "../Controller/userAuth.controler.js"
import { getCommentsByVideoId } from "../Controller/comments.controler.js"
export function userComments(app) {
    app.post("/api/addComment/:id", permissionGranted, addingComments)
    app.get("/api/getComments/:id", getCommentsByVideoId)
}