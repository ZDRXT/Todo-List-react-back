import mongoose from "mongoose"
const Schema = mongoose.Schema

const todoSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: false,
        default: ""
    },
    complete: {
        type: Boolean,
        required: false,
        default: false
    }
})

const todoModel = mongoose.model("todos", todoSchema)

export default todoModel