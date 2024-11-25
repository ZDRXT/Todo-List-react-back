import 'dotenv/config'
import express from "express"
import mongoose from "mongoose"
import todoRouter from "./src/routes/todos.route.js"
import checkApiKey from "./src/middlewares/checkApiKey.js"
import userRouter from './src/routes/user.route.js'

const app = express()

app.use(express.json())
app.use(checkApiKey)

app.get("/", (req, res) => res.status(200).send("Hello world!"))
app.use("/todos", todoRouter)
app.use("/user", userRouter)
app.use("*", (req, res) => res.status(404).send("Error: Not Found"))

async function main() {
    await mongoose.connect(process.env.MONGO_DB_URL)
}

main()
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => console.log(err))

app.listen(5001, () => console.log("Server was runned on port: 5001"))