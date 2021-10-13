import jwt from "jsonwebtoken";
import { AuthError } from "../common/error/index.js";

export const Authorization = (req, res, next) => {
    const Authorization = req.headers.authorization;
    if (!Authorization) {
        res.send(AuthError.TOKEN_NOT_FOUND);
    } else {
        const decoded = jwt.verify(Authorization, process.env.PRIVATE_KEY, { ignoreExpiration: true });
        if (decoded) {
            req.decoded = decoded;
            console.log(`decoded>>${decoded}`);
            next();
        } else if (err.message == "jwt expired") {
            res.send(AuthError.TOKEN_EXPIRED);
        } else {
            res.send(AuthError.TOKEN_INVALID)
        }
    }
}

