const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting: max 5 requests per 15 minutes per IP
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 5 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

// Verify transporter configuration
transporter.verify((error, success) => {
    if (error) {
        console.error('SMTP Configuration Error:', error);
    } else {
        console.log('✅ Server is ready to send emails');
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

// Contact form endpoint
app.post('/api/contact', limiter, async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: 'Please provide name, email, and message.'
        });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'Please provide a valid email address.'
        });
    }

    // Email options
    const mailOptions = {
        from: `"${name}" <${process.env.SMTP_USER}>`,
        to: process.env.RECIPIENT_EMAIL || 'office@distechsol.com',
        replyTo: email,
        subject: subject || `New Contact Form Submission from ${name}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #0051ff;">New Contact Form Submission</h2>
                <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
                </div>
                <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                    <h3 style="color: #333; margin-top: 0;">Message:</h3>
                    <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
                <p style="color: #999; font-size: 12px;">
                    This message was sent via DisTechSol contact form at ${new Date().toLocaleString()}
                </p>
            </div>
        `,
        text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${subject ? `Subject: ${subject}` : ''}

Message:
${message}

---
Sent via DisTechSol contact form at ${new Date().toLocaleString()}
        `
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);

        console.log(`✅ Email sent successfully from ${email}`);

        res.json({
            success: true,
            message: 'Your message has been sent successfully! We will get back to you soon.'
        });
    } catch (error) {
        console.error('Email sending error:', error);

        res.status(500).json({
            success: false,
            message: 'Failed to send email. Please try again later or contact us directly at office@distechsol.com'
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📧 Emails will be sent to: ${process.env.RECIPIENT_EMAIL || 'office@distechsol.com'}`);
});
