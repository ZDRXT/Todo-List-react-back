const todos = [
    {
        id: 1,
        text: "123123",
        complete: true
    },
    {
        id: 2,
        text: "321321",
        complete: false
    },
]

function getAllTodos(req, res) {
    return res.status(200).json({ message: "Ok", todos })
}

export { getAllTodos }