const express = require('express')
const router = express.Router()
const validator = require("email-validator");
const { uploadDocEmployee } = require('./FileUploadMiddleware');
const authEmployer = require('../../middleware/authEmployer');
const Employer = require('../../models/EmployerSchema');


router.put('/update', authEmployer, uploadDocEmployee, async (req, res) => {
    try {
        const body = req.body


        for (const key in body) {
            if (key === 'Email') {
                if (!validator.validate(body[key])) {
                    return res.status(409).json({ success: false, response: `${key} is Invalid` })

                }
            }

            if (body[key] === null || body[key] === undefined || body[key] === '') {
                return res.status(409).json({ success: false, response: `${key} is Empty Please Enter All The Fields` })
            }
        }

        console.log(req.body)
        if (req.CompanyRegistrationProof !== null && req.CompanyLogo !== null) {
            const UpdateEmployerDetails = await Employer.findByIdAndUpdate(req.Employer.id, { ...req.body, CompanyRegistrationProof: req.CompanyRegistrationProof, CompanyLogo: req.CompanyLogo }, { returnOriginal: false })
            if (UpdateEmployerDetails) {
                return res.status(200).json({ success: true, response: "Data Updated Successfully", UpdatedData: UpdateEmployerDetails })
            }
        }
        if (req.CompanyLogo === null) {
            const UpdateEmployerDetails = await Employer.findByIdAndUpdate(req.Employer.id, { ...req.body, CompanyRegistrationProof: req.CompanyRegistrationProof }, { returnOriginal: false })
            if (UpdateEmployerDetails) {
                return res.status(200).json({ success: true, response: "Data Updated Successfully", UpdatedData: UpdateEmployerDetails })
            }
        }
        if (req.CompanyRegistrationProof === null) {
            const UpdateEmployerDetails = await Employer.findByIdAndUpdate(req.Employer.id, { ...req.body, CompanyLogo: req.CompanyLogo }, { returnOriginal: false })
            if (UpdateEmployerDetails) {
                return res.status(200).json({ success: true, response: "Data Updated Successfully", UpdatedData: UpdateEmployerDetails })
            }

        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, response: "Internal Server Error Occured" })
    }
})


router.get('/fetchdetails', authEmployer, async (req, res) => {
    try {
        const GetEmployerDetails = await Employer.findById(req.Employer.id)

        GetEmployerDetails.CompanyRegistrationProof = process.env.DOMAIN + GetEmployerDetails.CompanyRegistrationProof + '.pdf'
        GetEmployerDetails.CompanyLogo = process.env.DOMAIN + GetEmployerDetails.CompanyLogo + '.png'
        return res.status(200).json({ success: true, response: GetEmployerDetails })

    } catch (error) {
        return res.status(500).json({ success: false, response: "Internal Server Error Occured" })

    }
})








module.exports = router