import {SetupEmail} from './setup';
import handlebars from "handlebars";
import fs from "fs";


interface MailData{
     to: string,
     name?: string,
     subject?: string,
     text?: string,
     email: "email" | "waitlist1" | "code" | "blog",
     replacement?: Object
}
export const sendMail = async (props:MailData) => {
     const {to, name, subject, text, email, replacement} = props;
     const source = fs.readFileSync(process.cwd() + `/public/templates/${email}.html`, 'utf-8').toString();
     const template = handlebars.compile(source);
     const replacements = {
          name: name,
          ...replacement
     };
     const htmlToSend = template(replacements);

     const from = '"Interna" <info@getinterna.com>'
     const transporter = await SetupEmail();
     const mailData = {
          from: from,
          to: to,
          // to: 'hanif.adedotun@gmail.com, steven.oshoke@gmail.com, dusiere40@gmail.com, obriggs03@gmail.com, fortunealebiosu710@gmail.com',
          subject: subject,
          text: subject,
          html: htmlToSend
     }
     let info = await transporter.sendMail(mailData);

     return info;
}