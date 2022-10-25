import {SetupEmail} from './setup';
import handlebars from "handlebars";
import fs from "fs";


interface MailData{
     to: string,
     name: string,
     subject?: string,
     text?: string,
}
export const sendMail = async (props:MailData) => {
     const {to, name, subject, text} = props;
     const source = fs.readFileSync('./public/templates/email.html', 'utf-8').toString();
     const template = handlebars.compile(source);
     const replacements = {
          name: name
     };
     const htmlToSend = template(replacements);

     const from = '"Interna" <info@getinterna.com>'
     const transporter = await SetupEmail();
     const mailData = {
          from: from,
          to: to,
          // to: 'hanif.adedotun@gmail.com, steven.oshoke@gmail.com, dusiere40@gmail.com, obriggs03@gmail.com, fortunealebiosu710@gmail.com',
          subject: `Welcome to the family ${name}`,
          text: "Welcome to the family...",
          html: htmlToSend
     }
     let info = await transporter.sendMail(mailData);

     return info;
}