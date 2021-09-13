import jwt from "jsonwebtoken";
import { AuthError } from "../common/error/index.js";

export const authorization = (req, res, next) => {
    const Authorization = req.headers.authorization;
    if (!Authorization) {
        res.send(AuthError.TOKEN_NOT_FOUND);
    } else {
        jwt.verify(Authorization, process.env.PRIVATE_KEY, (err, decoded) => {
            if (decoded) {
                req.decoded = decoded;
                console.log(`decoded>>${decoded}`);
                next();
            } else if (err.message == "jwt expired") {
                res.send(AuthError.TOKEN_EXPIRED);
            } else {
                res.send(AuthError.TOKEN_INVALID)
            }
        });
    }
}

