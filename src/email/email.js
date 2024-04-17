const nodemailer = require('nodemailer')
const templater = require('email-templates')

class Email {
    constructor(from, to, subject = '', text = '') {
        this.email = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })
        this.mailOptions = {
            from, to, subject, text
        }
    }

    setFrom(val) {
        this.mailOptions['from'] = val
        return this
    }
    setTo(val) {
        this.mailOptions['to'] = val
        return this
    }
    setSubject(val) {
        this.mailOptions['subject'] = val
        return this
    }
    setText(val) {
        this.mailOptions['text'] = val
        return this
    }
    sendEmail() {
        this.email.sendMail(this.mailOptions, function (err, info) {
            if (err) console.log(err);
            return info
        })
    }
    sendEmailTemplate() {

    }
}

module.exports = Email