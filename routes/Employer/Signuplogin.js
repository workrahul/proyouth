require('dotenv').config()
const smtpTransport = require('nodemailer-smtp-transport')
const express = require('express');
const jwt = require('jsonwebtoken');
const otpGenerator = require('otp-generator')
const Otp = require('../../models/OtpSchema');
const nodemailer = require('nodemailer');
const Employer = require('../../models/EmployerSchema');
const validator = require('email-validator');
const PRIVATE_KEY = process.env.PRIVATE_KEY
const router = express.Router()


router.post('/signup/sendotp', async (req, res) => {

    try {
        const EMAIL = process.env.EMAIL
        const PASSWORD = process.env.PASSWORD
        const CheckIfEmployerEmailAlreadyExist = await Employer.findOne({ Email: req.body.Email })

        const DeleteIFOtpAlreadyExist = await Otp.findOneAndDelete({ Email: req.body.Email })
        if (CheckIfEmployerEmailAlreadyExist) {
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
        console.log(EMAIL)
        console.log(PASSWORD)
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
        console.log(1)

        let mailOptions = {
            from: EMAIL,
            to: req.body.Email,
            subject: 'Pro Youth Verification',
            html: `<p>Your Otp is ${otp}</p>`
        };
        console.log(2)
        transporter.sendMail(mailOptions, async (err, data) => {
            if (err) {
                return res.json({ err: err });
            }
            console.log("mail send to " + req.body.Email)
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
        const CheckIfEmployerEmailAlreadyExist = await Employer.findOne({ Email: req.body.Email })
        const DeleteIFOtpAlreadyExist = await Otp.findOneAndDelete({ Email: req.body.Email })

        if (!CheckIfEmployerEmailAlreadyExist) {
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
            console.log(1)
            return res.status(200).json({ success: false, response: "Invalid OTP" })
        }
        console.log(GetTheOtp)
        console.log(req.body.Otp)
        console.log(GetTheOtp.Otp)
        console.log(GetTheOtp.Otp === req.body.Otp)
        if (GetTheOtp.Otp === req.body.Otp) {
            const FindTheEmployer = await Employer.findOne({ Email: req.body.Email })
            if (FindTheEmployer) {
                const jwtdata = await {
                    Employer: {
                        id: FindTheEmployer._id
                    }
                }
                const jwttoken = await jwt.sign(jwtdata, PRIVATE_KEY)

                return res.status(200).json({ success: true, data: FindTheEmployer, token: jwttoken, response: "User Login Successfull" })
            }
            if (!FindTheEmployer) {
                const CheckIfEmployerEmailAlreadyExist = await Employer.findOne({ Email: req.body.Email })
                const CheckIfEmployerWhatsappNumberExist = await Employer.findOne({ WhatsappNumber: req.body.WhatsappNumber })
                const DeleteIFOtpAlreadyExist = await Otp.findOneAndDelete({ Email: req.body.Email })
                if (CheckIfEmployerEmailAlreadyExist) {
                    return res.status(409).json({ success: false, response: 'Email Already Exist' })
                }
                if (CheckIfEmployerWhatsappNumberExist) {
                    return res.status(409).json({ success: false, response: 'WhatsappNumber Already Exist' })
                }
                if (!validator.validate(req.body.Email)) {
                    return res.status(409).json({ success: false, response: 'Invalid Email' })
                }
                const CreateEmployer = await Employer.create({
                    Email: req.body.Email,
                    WhatsappNumber: req.body.WhatsappNumber
                })
                if (CreateEmployer) {
                    const jwtdata = await {
                        Employer: {
                            id: CreateEmployer._id
                        }
                    }
                    const jwttoken = await jwt.sign(jwtdata, PRIVATE_KEY)
                    return res.status(200).json({ success: true, data: CreateEmployer, token: jwttoken, response: "User Login Successfull" })
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