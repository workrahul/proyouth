const jwt = require("jsonwebtoken");
const Employer = require("../models/EmployerSchema");
const PRIVATE_KEY = process.env.PRIVATE_KEY


const authEmployer = async (req, res, next) => {
    let success = false
    try {



        const token = req.header('auth-token');
        // req.header('auth-token');



        if (!token) {
            return res.status(400).json({ success: false, err: "login again", response: "Invalid Token" })

        }
        success = true
        const data = await jwt.verify(token, PRIVATE_KEY);
        // console.log(data)
        const CheckIfUserExist = await Employer.findById(data.Employer.id)
        if (!CheckIfUserExist) {
            return res.status(400).json({ success: false, err: "login again", response: "Invalid Token" })

        }
        req.Employer = data.Employer


        next()
    } catch (error) {
        success = false
        return res.status(400).json({ success: success, err: error.message })

    }

}



module.exports = authEmployer