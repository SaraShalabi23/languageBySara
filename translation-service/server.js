/*const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route for sending emails
app.post('/send-email', async (req, res) => {
    const { name, email, sourceLanguage, targetLanguage } = req.body;

    if (!name || !email || !sourceLanguage || !targetLanguage) {
        return res.status(400).send('Missing required fields');
    }

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sarah.shalabi2000@gmail.com', // כתובת המייל השולחת
            pass: 'your-app-password' // סיסמת אפליקציה, ראה הסבר למטה
        }
    });
    

    const mailOptions = {
        from: 'your-email@gmail.com', // כתובת המייל העסקי
        to: 'sarah.sh1705@icloud.com', // כתובת המייל הקבועה שמקבלת את הבקשות
        subject: 'בקשה לתרגום חדשה',
        text: `
            התקבלה בקשה חדשה לתרגום:
            שם: ${name}
            אימייל: ${email}
            שפת מקור: ${sourceLanguage}
            שפת יעד: ${targetLanguage}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
*/