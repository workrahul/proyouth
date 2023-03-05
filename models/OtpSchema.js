const mongoose = require('mongoose')

const OtpSchema = mongoose.Schema({
    Email: {
        type: String,
        required: true
    },
    Otp: {
        type: Number,
        required: true
    }


})

const Otp = mongoose.model('otp', OtpSchema)
module.exports = Otp