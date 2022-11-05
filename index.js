 const express = require('express');
 const nodemailer = require('nodemailer');
 const app = express();

 const PORT = 8000;

 nodemailer.createTransport({
     service: 'gamil',
     tls: {
         rejectUnauthorized: false
     },
     auth: {
         user: 'Enter your email id',
         pass: 'Enter your Password',

     }
 })

 transporter.sendEmail({
     from: 'Enter your email id',
     to: 'recievers email id ',
     subject: 'project testing mail',
     Text: 'this is an automatic mail'

 }, (error, response) => {
     if (error)
         console.log('Error', error);
     else
         console.log('Mail sent.', response);

 })


 app.listen(PORT, () => {
     console.log('server started on port', PORT);
 })
