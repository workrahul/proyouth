require('dotenv').config()
const express = require('express');
const smtpTransport = require('nodemailer-smtp-transport')
const jwt = require('jsonwebtoken');
const otpGenerator = require('otp-generator')
const Otp = require('../../models/OtpSchema');
const nodemailer = require('nodemailer');
const validator = require('email-validator');
const Student = require('../../models/StudentSchema');

const PRIVATE_KEY = process.env.PRIVATE_KEY
const router = express.Router()


router.post('/signup/sendotp', async (req, res) => {

    try {
        const EMAIL = process.env.EMAIL
        const PASSWORD = process.env.PASSWORD
        const CheckIfStudentEmailAlreadyExist = await Student.findOne({ Email: req.body.Email })

        const DeleteIFOtpAlreadyExist = await Otp.findOneAndDelete({ Email: req.body.Email })
        if (CheckIfStudentEmailAlreadyExist) {
            return res.status(409).json({ success: false, response: 'Email Already Exist' })
        }

        if (!validator.validate(req.body.Email)) {
            return res.status(409).json({ success: false, response: 'Invalid Email' })
        }
        const body = req.body
        for (const key in body) {
            if (body[key] === null || body[key] === undefined || body[key] === '') {
                return res.status(409).json({ success: false, response: `${key} is Empty Please Enter All The Fields` })
            }
        }
        const otp = otpGenerator.generate(6, { digits: true, alphabets: false, upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
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
            to: req.body.Email,
            subject: 'Pro Youth Verification',
            html: `<p>Your Otp is ${otp}</p>`
        };

        transporter.sendMail(mailOptions, async (err, data) => {
            if (err) {
                return res.json({ err: err });
            }
            console.log("mail send to " + req.body.email)
            const SaveOtp = await Otp.create({
                Email: req.body.Email,
                Otp: otp
            })
            if (SaveOtp) {
                console.log(otp)
                setTimeout(async () => {
                    const otpholder = await Otp.findOneAndDelete({
                        Otp: otp,
                    });
                }, 72000);
                return res.status(200).json({ success: true, response: 'Email sent!!!' });
            } else {
                return res.status(409).json({ success: true, response: 'Email not sent!!!' });

            }
        });


    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, response: "Internal Server Error" })

    }

})

router.post('/login/sendotp', async (req, res) => {
    try {
        const EMAIL = process.env.EMAIL
        const PASSWORD = process.env.PASSWORD
        const CheckIfStudentEmailAlreadyExist = await Student.findOne({ Email: req.body.Email })
        const DeleteIFOtpAlreadyExist = await Otp.findOneAndDelete({ Email: req.body.Email })

        if (!CheckIfStudentEmailAlreadyExist) {
            return res.status(409).json({ success: false, response: 'Email Does Not Exist' })
        }

        if (!validator.validate(req.body.Email)) {
            return res.status(409).json({ success: false, response: 'Invalid Email' })
        }
        const body = req.body
        for (const key in body) {
            if (body[key] === null || body[key] === undefined || body[key] === '') {
                return res.status(409).json({ success: false, response: `${key} is Empty Please Enter All The Fields` })
            }
        }
        const otp = otpGenerator.generate(6, { digits: true, alphabets: false, upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
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
            to: req.body.Email,
            subject: 'Pro Youth Verification',
            html: `<p>Your Otp is ${otp}</p>`
        };

        transporter.sendMail(mailOptions, async (err, data) => {
            if (err) {
                return res.json({ err: err });
            }
            console.log("mail send to " + req.body.email)
            const SaveOtp = await Otp.create({
                Email: req.body.Email,
                Otp: otp
            })
            if (SaveOtp) {
                console.log(otp)
                setTimeout(async () => {
                    const otpholder = await Otp.findOneAndDelete({
                        Otp: otp,
                    });
                }, 72000);
                return res.status(200).json({ success: true, response: 'Email sent!!!' });
            } else {
                return res.status(409).json({ success: true, response: 'Email not sent!!!' });

            }
        });


    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, response: "Internal Server Error" })

    }

})

router.post('/verifyotp', async (req, res) => {
    try {
        const GetTheOtp = await Otp.findOne({ Email: req.body.Email })
        if (!GetTheOtp) {
            return res.status(200).json({ success: false, response: "Invalid Otp" })
        }
        if (GetTheOtp.Otp === req.body.otp) {
            const FindTheStudent = await Student.findOne({ Email: req.body.Email })
            if (FindTheStudent) {
                const jwtdata = await {
                    Student: {
                        id: FindTheStudent._id
                    }
                }
                const jwttoken = await jwt.sign(jwtdata, PRIVATE_KEY)

                return res.status(200).json({ success: true, data: FindTheStudent, token: jwttoken, response: "User Login Successfull" })
            }
            if (!FindTheStudent) {
                const CheckIfStudentEmailAlreadyExist = await Student.findOne({ Email: req.body.Email })
                const CheckIfStudentPhoneNumberExist = await Student.findOne({ PhoneNumber: req.body.PhoneNumber })
                const DeleteIFOtpAlreadyExist = await Otp.findOneAndDelete({ Email: req.body.Email })
                if (CheckIfStudentEmailAlreadyExist) {
                    return res.status(409).json({ success: false, response: 'Email Already Exist' })
                }
                if (CheckIfStudentPhoneNumberExist) {
                    return res.status(409).json({ success: false, response: 'WhatsappNumber Already Exist' })
                }
                if (!validator.validate(req.body.Email)) {
                    return res.status(409).json({ success: false, response: 'Invalid Email' })
                }
                const CreateStudent = await Student.create({
                    Email: req.body.Email,
                    PhoneNumber: req.body.PhoneNumber
                })
                if (CreateStudent) {
                    const jwtdata = await {
                        Student: {
                            id: CreateStudent._id
                        }
                    }
                    const jwttoken = await jwt.sign(jwtdata, PRIVATE_KEY)
                    return res.status(200).json({ success: true, data: CreateStudent, token: jwttoken, response: "User Login Successfull" })
                }

            }

        } else {
            return res.status(408).json({ success: false, response: "Invalid OTP" })

        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, response: "Internal Server Occured" })

    }
})

module.exports = router