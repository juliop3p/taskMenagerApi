const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'julio15.zn@gmail.com',
        subject: 'Thanks for joining in!', 
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'julio15.zn@gmail.com',
        subject: 'Thanks for being a part of our project!',
        text: `Goodbye, ${name}. Let us know the reason you're leaving anwsering a Questioning!`,
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail,
}

