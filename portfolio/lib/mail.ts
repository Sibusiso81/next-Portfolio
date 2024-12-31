"use server"
/* 
Pages to build 
1)About
-Inspiration from ultra framer temp
2)Sign in /log in 
use shadcn components
-use next.js auth
3)Contact 
-use shadcn components 
4)Dashboard

*/


import nodemailer from "nodemailer";
type Mail = {
  to: string;
  name: string;
  subject: string;
  body: string;
};

export async function sendMail({ to, name, subject, body }: Mail) {
  const { SMPT_PASSWORD, SMTP_EMAIL } = process.env;
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMPT_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      
      to:SMTP_EMAIL,
     subject,
      html: body,
    });
    console.log(sendResult);
    console.log(`name:${name},To:${to}`)
    
  } catch (error) {
    console.log(error);
    

  }
}
