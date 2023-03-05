const mongoose = require('mongoose')


const EmployerSchema = mongoose.Schema({
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    WhatsappNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    CompanyName: {
        type: String,
        default: ''
    },
    RegisteredAddress: {
        type: String,
        default: ''

    },

    CompanyWebsiteAddress: {
        type: String,
        default: ''

    },
    CompanyRegistrationNumber: {
        type: String,
        default: ''
    },
    BusinessDomain: {
        type: String,
        default: ''
    },
    TaxIdNumber: {
        type: String,
        default: ''
    },
    CompanyLogo: {
        type: String,
        default: ''
    },
    CompanyRegistrationProof: {
        type: String,
        default: ''

    },
    AboutYourself: {
        type: String,
        default: ''

    }

})



const Employer = mongoose.model('Employer', EmployerSchema);
module.exports = Employer