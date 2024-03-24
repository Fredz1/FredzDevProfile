"use server";

import nodemailer from "nodemailer";
// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  /* host: "smtp.example.com",
  port: 587,
  secure: false,  */
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (formValues) => {
  console.log("im here");
  try {
    const info = await transporter.sendMail({
      from: "fredwil25@gmail.com",
      to: "fredwil25@gmail.com",
      subject: "Website Enquiry",
      text: "You have a web enquiry.",
    });

    console.log("Email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default sendEmail;
