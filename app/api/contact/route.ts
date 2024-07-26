import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure your SMTP transporter using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  // Email options
  const mailOptions = {
    from: email, // Sender address
    to: process.env.RECEIVER_EMAIL, // Receiver email address
    subject: `New Contact Form Submission: ${subject}`,
    text: `You have a new contact form submission from:
        
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 },
    );
  }
}
