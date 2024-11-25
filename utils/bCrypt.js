import bycript from "bcrypt"

const hashPassword = async (password) => {
    return await bycript.hash(password, 2)
}

const comparePassword = async (password, hashPassword) => {
    return await bycript.compare(password, hashPassword)
}

export { hashPassword, comparePassword }