import jwt from 'jsonwebtoken'
export const verifyAccessToken = (req, res, next)=> {
const authHeader = req.headers.authorization
if (authHeader){
    const token = authHeader.split(" ")[1]
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=> {
        if (err) return res.status(401).json({ succes:false, message: "Invalid Token"})
            req.decoded = decoded
        next()
    })
} else {
    res.status(401).json({ succes: false, message: "No Access Token Provided"})
}

}