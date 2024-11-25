import jwt from "jsonwebtoken"

async function checkUserToken(req, res, next) {
    try {
        let token = req.headers["authorization"]?.split(" ")[1]

        if (!token) return res.status(404).json({message: "Token is no valid"})

        let decodedInfo

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return res.status(404).json({message: "Token is no valid"})
            decodedInfo = decoded
        })

        console.log(decodedInfo)

        next()
    } catch (error) {
        return res.status(500).json({message: "Server Error", error})
    }
}

export default checkUserToken