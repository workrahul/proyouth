require('dotenv').config()
// require('./db/db')
const mongoose = require('mongoose')
const path = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const EmployeerRoute = require('./routes/Employer/Employer')
const JobsRoute = require('./routes/Jobs/Jobs')
const StudentRoute = require('./routes/Student/Student')
const StudentSignupLoginRoute = require('./routes/Student/LoginSignup')
const EmployerSignupLoginRoute = require('./routes/Employer/Signuplogin')
const fileupload = require('express-fileupload')

app.use(express.json())
const uri = process.env.DATABASE;
mongoose.set('strictQuery', false);
mongoose.connect(uri, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully.");
})
app.use(fileupload())
app.use('/uploads', express.static('uploads'))
app.use(express.static('uploads'))



app.use('/employer', EmployeerRoute)
app.use('/employerauth', EmployerSignupLoginRoute)
// employerauth/signup/sendotp
app.use('/student', StudentRoute)
app.use('/studentauth', StudentSignupLoginRoute)
app.use('/job', JobsRoute)
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))