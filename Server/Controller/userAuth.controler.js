import jwt from "jsonwebtoken";

export const verfyingUser = async (req, res)=> {
    try {
    const { username } = req.body;
    const authorised =  jwt.sign(username, "secretKey");
    res.send({ token: authorised });
    } catch (error) {
        res.status(500).send(error || {messege : "internal server errror"})
    }
}

export function permissionGranted(req, res, next) {
    const authrizartionHeader = req.headers["authorization"];
    const token = authrizartionHeader && authrizartionHeader.split(" ")[1];
    jwt.verify(token, "secretKey", (error, user) => {
        if (error) {
           return res.status(403).send("invalid  token")
        } else {
            req.user = user
            next()
        }
        
    })
   
}