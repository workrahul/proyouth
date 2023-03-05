const mongoose = require('mongoose')


const StudentSchema = mongoose.Schema({
    FullName: {
        type: String,

    },
    DOB: {
        type: Date,

    },
    PhoneNumber: {
        type: Number
    },
    Email: {
        type: String
    },
    SchoolOrUniversity: {
        type: String
    },
    AreaOfStudyOfMajor: {
        type: String
    },
    WorkExpierence: {
        type: Number
    },
    Availability: {
        type: String
    },
    Tools: {
        type: Array,

    },
    CV: {
        type: String
    },
    AboutYourself: {
        type: String
    },
    Jobs: {
        type: Array,
        default: []
    }

})



const Student = mongoose.model('Student', StudentSchema);
module.exports = Student