import { addUser } from "../Controller/user.controller.js"
import { verfyingUser } from "../Controller/userAuth.controler.js";
export function userRoutes(app) {
    app.post("/api/signUp", addUser , verfyingUser);
}