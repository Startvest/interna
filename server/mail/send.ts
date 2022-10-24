import {SetupEmail} from './setup';

interface MailData{
     to: string,
     subject: string,
     text?: string,
}
export const sendMail = async () =>{
     const transporter = await SetupEmail();
     const mailData = {
          from: 'Interna',
          to: 'hanif.adedotun@gmail.com',
          subject: `A new Message From Test Interna`,
          text: "Plaintext version of the message",
          html: "<p>HTML version of the message</p>"
     }
     let info = await transporter.sendMail(mailData);

     return info;
}