const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
    EmployerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employer'
    },
    Designation: {
        type: String,
        required: true,
    },
    Tools: {
        type: Array,
        required: true,
    },
    Stipend: {
        type: Number,
        required: true
    },
    Mode: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    Type: {
        type: String,
        required: true
    },
    Duration: {
        type: String,
        required: true

    },
    ContactNumber: {
        type: Number,
        required: true
    }
})


const Job = mongoose.model('job', JobSchema)
module.exports = Job