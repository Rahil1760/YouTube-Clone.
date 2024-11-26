import jwt from "jsonwebtoken";
export function verfyingUser(req, res) {
    const { userName } = req.body;
    const authorised = jwt.sign(userName, "secretKey");
    res.send({ token: authorised })
}