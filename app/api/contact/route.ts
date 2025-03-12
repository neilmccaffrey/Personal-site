require('dotenv').config({ path: './.env' });
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure SMTP transporter using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT === '465' ? 465 : 587,
  secure: process.env.SMTP_PORT === '465', // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  // Check for missing or empty fields
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json(
      { message: 'All fields are required.' },
      { status: 400 },
    );
  }

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
