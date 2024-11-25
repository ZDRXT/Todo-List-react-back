function userToSend(user){
    return{
        _id: user._id,
        author: user.author,
        email: user.email,
        city: user.city,
        age: user.age
    }
}

export default userToSend