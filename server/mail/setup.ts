import nodemailer from "nodemailer";

export const SetupEmail = async () => {
     
     let transporter = nodemailer.createTransport({
          port: 465,
          host: "webmail.getinterna.com",
          auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
          },
          secure: true,
          tls: {
            rejectUnauthorized: false
        }
        })
     return transporter;
}