import express from "express";
import { registerUser, loginUser, authUser, deleteAllUsers } from "../controllers/user.controller.js"
import checkUserToken from "../middlewares/checkUserToken.js";

const userRouter = express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.post("/auth", checkUserToken, authUser)
userRouter.delete("/delete-all", deleteAllUsers)

export default userRouter