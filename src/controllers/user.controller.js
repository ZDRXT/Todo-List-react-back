import userModel from "../modeles/user.model.js"
import { hashPassword, comparePassword } from "../../utils/bCrypt.js"
import jwt from "jsonwebtoken"
import { compare } from "bcrypt"

async function registerUser(req, res) {
    try {
        let { email, password, author } = req.body

        if (!email || !password || !author) return res.status(404).json({message: "You must send all data"})
        
        let exUser = await userModel.findOne({ author })
        
        if (exUser) return res.status(404).json({message: "This user already exist"})
        
        let hashedPassword = await hashPassword(password)
        
        let newUser = new userModel({ email, password: hashedPassword, author })
        
        await newUser.save()
        
        let token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "8h" })

        res.status(200).json({message: "New user was created!", user: newUser, token})
    } catch (error) {
        return res.status(500).json({message: "Something went wrong...", error})
    }
}

async function loginUser(req, res) {
    try {
        let { author, password } = req.body
        if (!password || !author) return res.ststus(404).json({message: "You must send all data"})
        
        let exUser = await userModel.findOne({ author })
        if (!exUser) return res.status(404).json({ message: "Something went wrong..." })
        
        let isAuth = await comparePassword(password, exUser.password)
        if (!isAuth) return res.ststus(404).json({message: "Login or password invalid"})
        
        let token = jwt.sign({ _id: exUser._id }, process.env.JWT_SECRET, { expiresIn: "8h" })
        
        res.status(200).json({ user: exUser, token })
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong...", error })
    }
}

async function authUser(req, res) {
    try {
        res.status(200)
    } catch (error) {
        return res.status(500).json({message: "Something went wrong", error})
    }
}

async function deleteAllUsers(req, res) {
    try {
        let result = await userModel.deleteMany()
        return res.status(200).json({result})
    } catch (error) {
        return res.status(500).json({message: "Somwthign went wrong...", error})
    }
}

export { loginUser, registerUser, authUser, deleteAllUsers }