import jwt from "jsonwebtoken";

export const authorization = (req, res, next) => {
    const Authorization = req.headers.authorization;
    if (!Authorization) {
        res.status(404).send("Token not found");
    } else {
        jwt.verify(Authorization, process.env.PRIVATE_KEY, (err, decoded) => {
            if (err) {
                console.error(err.toString());
                //if (err) throw new Error(err)
                return res.status(401).json({ "error": true, "message": 'Unauthorized access.', err });
            }
            console.log(`decoded>>${decoded}`);
            req.decoded = decoded;
            next();
        });
    }
}

