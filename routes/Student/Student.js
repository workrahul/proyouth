const express = require('express');
const authStudent = require('../../middleware/authStudent');
const validator = require('email-validator')
const { uploadDocStudent } = require('../Employer/FileUploadMiddleware');
const Student = require('../../models/StudentSchema')
const Job = require('../../models/JobSchema')
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport')
const router = express.Router();



router.put('/update', authStudent, uploadDocStudent, async (req, res) => {
    console.log(req.Student.id)
    console.log(req.body.Tools)
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
        if (req.StudentCV !== null && req.StudentCV !== undefined) {
            const UpdateStudentDetails = await Student.findByIdAndUpdate(req.Student.id, { ...req.body, CV: req.StudentCV }, { returnOriginal: false })
            if (UpdateStudentDetails) {
                return res.status(200).json({ success: true, response: "Data Updated Successfully", UpdatedData: UpdateStudentDetails })
            }
        }
        if (req.StudentCV === null) {
            const UpdateStudentDetails = await Student.findByIdAndUpdate(req.Student.id, { ...req.body }, { returnOriginal: false })
            if (UpdateStudentDetails) {
                return res.status(200).json({ success: true, response: "Data Updated Successfully", UpdatedData: UpdateStudentDetails })
            }
        }


    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, response: "Internal Server Error Occured" })
    }
})


router.get('/fetchdetails', authStudent, async (req, res) => {
    try {
        const GetTheStudent = await Student.findById(req.Student.id);
        GetTheStudent.CV = process.env.DOMAIN + GetTheStudent.CV + '.pdf'
        if (GetTheStudent) {
            return res.status(200).json({ success: true, response: "Data Updated Successfully", UpdatedData: GetTheStudent })

        }
    } catch (error) {
        return res.status(500).json({ success: false, response: "Internal Server Error Occured" })

    }
})

router.get('/fetchalljobs', authStudent, async (req, res) => {
    try {
        const GetAllJobs = await Job.find();
        return res.json({ success: true, data: GetAllJobs })

    } catch (error) {
        return res.status(500).json({ success: false, response: "Internal Server Error Occured" })

    }
})

router.get('/fetchjobdetails/:id', authStudent, async (req, res) => {
    try {
        const getjobdetail = await Job.findById(req.params.id)
        return res.status(200).json({ success: true, response: getjobdetail })
    } catch (error) {
        return res.status(500).json({ success: false, response: "Internal Server Error Occured" })
    }
})
router.post('/applyforjob/:id', authStudent, async (req, res) => {
    try {
        const EMAIL = process.env.EMAIL
        const PASSWORD = process.env.PASSWORD
        const GetStudentDetails = await Student.findById(req.Student.id)
        const GetJobDetails = await Job.findById(req.params.id)
        let unique1 = GetJobDetails['Tools'].filter((o) => GetStudentDetails['Tools'].indexOf(o) === -1)
        // console.log(unique1.length)
        const UpdateUser = await Student.findByIdAndUpdate(GetStudentDetails._id, {
            $addToSet: {
                Jobs: req.params.id
            }

        })
        console.log(UpdateUser)
        if (unique1.length > 0) {
            let transporter = nodemailer.createTransport(smtpTransport({
                service: 'gmail',
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: EMAIL,
                    pass: PASSWORD,
                }
            })
            );


            let mailOptions = {
                from: EMAIL,
                to: 'pranavj1362@gmail.com',
                subject: 'New Enquiry For Tools',
                html: `<p>The Student with Email,Phone Number and name ${GetStudentDetails.Email}, ${GetStudentDetails.PhoneNumber}, ${GetStudentDetails.FullName}, respectively requires ${unique1.map((data) => {
                    return data
                })} </p>`
            };

            transporter.sendMail(mailOptions, async (err, data) => {
                if (err) {
                    return res.json({ err: err });
                }
                // console.log("mail send to " + req.body.email)
                if (UpdateUser) {
                    return res.status(200).json({ success: true, response: 'Applied For Job Successfully' });
                }



            });

        } else if (UpdateUser && unique1.length <= 0) {
            console.log(1)
            return res.status(200).json({ success: true, response: 'Applied For Job Successfully' });

        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, response: "Internal Server Error Occured" })

    }
})

module.exports = router
