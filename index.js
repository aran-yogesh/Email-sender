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
         user: 'aranyogesh04@gmail.com',
         pass: '0ne@1one@1',

     }
 })

 transporter.sendEmail({
     from: 'aranyogesh04@gmail.com',
     to: 'yogeshmahe04@gmail.com',
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