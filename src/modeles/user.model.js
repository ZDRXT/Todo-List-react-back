import mongoose from "mongoose"
const Schema = mongoose.Schema

const userSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: false,
        default: ""
    },
    age: {
        type: String,
        required: false,
        default: ""
    }
})

const userModel = mongoose.model("users", userSchema)

export default userModel