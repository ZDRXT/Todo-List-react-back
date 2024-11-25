import todoModel from "../modeles/todos.model.js"

async function createTodo(req, res) {
    try {
        let { title, text, author } = req.body
        let newTodo = new todoModel({title, text, author})
        await newTodo.save()
        res.status(200).json({ message: "New todo was created", newTodo: req.body })
    } catch (error) {
        return res.status(500).json({ message: "Something went Error...", error})
    }
}

async function getAllTodos(req, res) {
    try {
        let allTodos = await todoModel.find()
        if (!allTodos) return res.status(200).json({message: "No data in database"})
        return res.status(200).json({message: "All data", allTodos})   
    } catch (error) {
        return res.status(500).json({message: "Something went wrong...", error})
    }
}

async function getTodo(req, res) {
    try {
        let { id } = req.params
        let exTodo = await todoModel.findById(id)

        if (!exTodo) return res.status(200).json({message: "No data in database"})

        res.status(200).send(exTodo)
    } catch (error) {
        return res.status(500).json({message: "Something went Error...", error})
    }
}

async function deleteTodo(req, res) {
    try {
        let { id } = req.params
        let exTodo = await todoModel.findByIdAndDelete(id)

        if (!exTodo) return res.status(200).json({message: "No data in database"})

        res.status(200).send({message: "Deleted"})
    } catch (error) {
        return res.status(500).json({message: "Something went Error...", error})
    }
}

async function updateTodo(req, res) {
    try {
        let { id } = req.params
        let { updateData} = req.body

        let exTodo = await todoModel.findByIdAndUpdate(id, updateData, { new: true })

        if (!exTodo) return res.status(200).json({message: "No data in database"})

        res.status(200).send({message: "Deleted"})
    } catch (error) {
        return res.status(500).json({message: "Something went Error...", error})
    }
}

async function deleteAllTodos(req, res) {
    try {
        let result = await todoModel.deleteMany()
        return res.status(200).json({result})
    } catch (error) {
        return res.status(500).json({message: "Somwthign went wrong...", error})
    }
}



export { createTodo, getAllTodos, getTodo, deleteTodo, updateTodo, deleteAllTodos }