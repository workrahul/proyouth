// require('../../uploads')
const path = require('path')
exports.uploadDocEmployee = async (req, res, next) => {

    try {
        console.log('first')
        if (req.body.docs === 'true') {
            const uploadpath = path.join(__dirname, '../../uploads')

            if (!req.files) {
                return res.status(409).json({ success: false, response: "Please Upload " })
            }
            if (req.files.CompanyLogo !== null && req.files.CompanyLogo !== undefined && req.files.CompanyLogo !== '') {
                let CompanyLogo = 'CompanyLogo' + Date.now() + req.files.CompanyLogo.name
                await req.files.CompanyLogo.mv(`${uploadpath}/` + CompanyLogo + '.png', async function (err) {
                    if (err) {

                        return res.status(500).json({ success: false, response: "Internal Server Error Occured" })
                    } else {
                        console.log('uploaded logo')
                    }
                })
                req.CompanyLogo = CompanyLogo

            } else {
                req.CompanyLogo = null
            }
            if (req.files.CompanyRegistrationProof !== null && req.files.CompanyRegistrationProof !== undefined && req.files.CompanyRegistrationProof !== '') {
                console.log(req.files.CompanyRegistrationProof)
                let CompanyRegistrationProof = 'CompanyRegistrationProof' + Date.now() + req.files.CompanyRegistrationProof.name
                await req.files.CompanyRegistrationProof.mv(`${uploadpath}/` + CompanyRegistrationProof + '.pdf', async function (err) {
                    if (err) {
                        console.log(err)
                        return res.status(500).json({ success: false, response: "Internal Server Error Occured" })
                    } else {
                        console.log('uploaded pdf')
                    }
                })
                req.CompanyRegistrationProof = CompanyRegistrationProof

            } else {
                req.CompanyRegistrationProof = null
            }



            next()
        } else {
            req.CompanyLogo = null

            req.CompanyRegistrationProof = null

            next()
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, response: "Internal Server Error Occured" })

    }

}


exports.uploadDocStudent = async (req, res, next) => {
    try {
        console.log('first')
        if (req.body.docs === 'true') {
            const uploadpath = path.join(__dirname, '../../uploads')

            if (!req.files) {
                return res.status(409).json({ success: false, response: "Please Upload " })
            }
            if (req.files.CV !== null && req.files.CV !== undefined && req.files.CV !== '') {
                console.log('check1')
                let StudentCV = 'StudentCV' + Date.now() + req.files.CV.name
                await req.files.CV.mv(`${uploadpath}/` + StudentCV + '.pdf', async function (err) {
                    if (err) {

                        return res.status(500).json({ success: false, response: "Internal Server Error Occured" })
                    } else {
                        console.log('uploaded logo')
                    }
                })
                req.StudentCV = StudentCV

            } else {
                console.log('check2')

                req.StudentCV = null
            }



            console.log('check3')

            next()
        } else {
            console.log('check3')
            req.StudentCV = null

            next()
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, response: "Internal Server Error Occured" })

    }
}