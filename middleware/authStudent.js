const jwt = require("jsonwebtoken");
const Student = require("../models/StudentSchema");
const PRIVATE_KEY = process.env.PRIVATE_KEY


const authStudent = async (req, res, next) => {
    let success = false
    try {



        const token = req.header('auth-token');



        if (!token) {
            return res.status(400).json({ success: false, err: "login again", response: "Invalid Token" })

        }
        success = true
        const data = await jwt.verify(token, PRIVATE_KEY);
        console.log(data)
        const CheckIfUserExist = await Student.findById(data.Student.id)
        if (!CheckIfUserExist) {
            return res.status(400).json({ success: false, err: "login again", response: "Invalid Token" })

        }
        req.Student = data.Student


        next()
    } catch (error) {
        console.log(error)
        success = false
        return res.status(400).json({ success: success, err: error.message })

    }

}



module.exports = authStudent