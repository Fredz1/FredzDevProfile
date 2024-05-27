const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'your_email_service_provider',
  auth: {
    user: 'your_email_address',
    pass: 'your_email_password'
  }
});

// Define the email options
const mailOptions = {
  from: 'Michéle Williams <michelewilliams55@gmail.com>',
  to: 'recipient_email_address',
  subject: 'Invoice',
  html: '<h1>Invoice</h1><p>Please find attached the invoice.</p>',
  attachments: [
    {
      filename: 'invoice.pdf',
      path: '/path/to/invoice.pdf'
    }
  ]
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});

const sendEmail = (toAdress, invoicePath) => {
  
  const mailOptions = {
    from: 'Michéle Williams <michelewilliams55@gmail.com>',
    to: toAdress,
    subject: 'Invoice',
    html:
      `<h1>Invoice</h1><p>Please find attached the invoice.</p>`
    ,
    attachments: [
      {
        filename: 'invoice.pdf',
        path: invoicePath
      }
    ]
  };
}

