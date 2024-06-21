// sendEmail.js

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

console.log('SendGrid API Key:', process.env.SENDGRID_API_KEY);

const sendEmail = async (formData) => {
    const { name, email, phone, message } = formData;

    const msg = {
        to: 'flemming_ha@hotmail.com', // Replace with your email
        from: 'flha@spectoconsult.com',
        subject: 'New Message from Contact Form',
        html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
        `,
    };

    try {
        await sgMail.send(msg);
        console.log('Email sent');
    } catch (error) {
        console.error('Error sending email:', error.toString());
        if (error.response) {
            console.error('SendGrid response error:', error.response.body);
        }
    }
};

module.exports = sendEmail;
