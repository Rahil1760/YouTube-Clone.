import jwt from "jsonwebtoken";
export function verfyingUser(req, res) {
    const { username } = req.body;
    const authorised = jwt.sign(username, "secretKey");
    res.send({ token: authorised });
}

export function permissionGranted(req, res, next) {
    const authrizartionHeader = req.headers["authorization"];
    const token = authrizartionHeader && authrizartionHeader.split(" ")[1];
    jwt.verify(token, "secretKey", (error, user) => {
        if (error) {
           return res.status(403).send("invalid  token")
        }
        req.user = user
    })
    next()
}