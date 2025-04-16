import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, phone, company, designation, city, state, service, message } = body;

        console.log('Received form submission from:', name);

        // Check if environment variables are set
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Email environment variables not set');
            return NextResponse.json({ 
                success: false, 
                error: "Server configuration error. Please contact the administrator."
            }, { status: 500 });
        }
        
        // Use the correct SMTP server from environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: process.env.SMTP_SECURE !== 'false',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: `"Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO || process.env.EMAIL_USER,
            subject: `Contact Form Submission from ${name} - ${service}`,
            text: `You have a new message from ${name} (${email}):\n\nPhone: ${phone}\nCompany: ${company || 'Not provided'}\nDesignation: ${designation || 'Not provided'}\nCity: ${city}\nState: ${state}\nService: ${service}\n\nMessage:\n${message}`,
            html: `<h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                <p><strong>Designation:</strong> ${designation || 'Not provided'}</p>
                <p><strong>City:</strong> ${city}</p>
                <p><strong>State:</strong> ${state}</p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>`
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent successfully:', info.messageId);
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ 
            success: false, 
            error: "Unable to send your message at this time. Please try again later or contact us directly.",
            suggestion: "Please contact us directly at sales@leadz.site"
        }, { status: 500 });
    }
}