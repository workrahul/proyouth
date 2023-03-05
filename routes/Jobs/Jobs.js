const express = require('express')
const authEmployer = require('../../middleware/authEmployer')
const Job = require('../../models/JobSchema')
const router = express.Router()


router.post('/create', authEmployer, async (req, res) => {
    try {
        console.log(req.body)
        const data = req.body
        for (const key in data) {
            if (data[key] === '' || data[key] === null || data[key] === undefined) {
                return res.status(409).json({ success: false, response: `${key} is Empty.Please Fill All The Details` })
            }
            if (key === 'ContactNumber') {
                if (String(data[key]).length !== 10) {
                    return res.status(409).json({ success: false, response: `${key} is Invalid` })

                }
            }
        }

        const CreateJob = await Job.create({
            EmployerId: req.Employer.id,
            Designation: req.body.Designation,
            Tools: req.body.Tools,
            Stipend: req.body.Stipend,
            Mode: req.body.Mode,
            Type: req.body.Type,
            Duration: req.body.Duration,
            ContactNumber: req.body.ContactNumber
        })
        if (CreateJob) {
            return res.status(200).json({ success: true, response: CreateJob })
        }

    } catch (error) {
        return res.status(500).json({ success: true, response: "Internal Server Error Occured" })
    }
})



router.put('/update/:id', authEmployer, async (req, res) => {
    try {
        const data = req.body
        for (const key in data) {
            if (data[key] === '' || data[key] === null || data[key] === undefined) {
                return res.status(409).json({ success: false, response: `${key} is Empty.Please Fill All The Details` })
            }
            if (key === 'ContactNumber') {
                if (String(data[key]).length !== 10) {
                    return res.status(409).json({ success: false, response: `${key} is Invalid` })

                }
            }
        }

        const UpdateJobData = await Job.findByIdAndUpdate(req.params.id, req.body, { returnOriginal: false });
        if (UpdateJobData) {
            return res.status(200).json({ success: true, response: "Job Updated Successfully", data: UpdateJobData })
        }
    } catch (error) {
        return res.status(500).json({ success: true, response: "Internal Server Error Occured" })

    }
})


router.get('/fetch', authEmployer, async (req, res) => {
    try {
        const GetAllJobSPostedByEmployer = await Job.find({ EmployerId: req.Employer.id })


        return res.status(200).json({ success: true, data: GetAllJobSPostedByEmployer })


    } catch (error) {
        return res.status(500).json({ success: true, response: "Internal Server Error Occured" })

    }
})

router.get('/particularjobinfo/:id', authEmployer, async (req, res) => {
    try {
        const getParticularjobdetails = await Job.findById(req.params.id)
        return res.status(200).json({ success: true, response: getParticularjobdetails })
    } catch (error) {
        return res.status(500).json({ success: false, response: "Internal Server Error Occured" })

    }
})


module.exports = router

