async function checkApiKey(req, res, next) {
    try {
        let apiKey = req.headers["apikey"]

        if (apiKey === process.env.API_KEY) {
            next()
        } else {
            return res.status(404).json({ message: "Not allowed"})
        }
    } catch (error) {
        return res.status(500).json({ message: "Server Error", error})
    }
}

export default checkApiKey