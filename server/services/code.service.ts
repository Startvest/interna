import {addCode, getCode, updateCode} from '../db/Code';
import {sendMail} from "../mail";

export const codeService = {

  async sendCode(email: string){
    const generatedCode = String(Math.floor(1000 + Math.random() * 9000));
    const code = await getCode(email);


    if(code!==null) {
      await updateCode({
        email: email,
        code: generatedCode,
    });

    }else{
      await addCode({
        email: email,
        code: generatedCode,
      }) 
    }

    // Check if code exists
    const c = await sendMail({
      to: email, 
      subject: `Confirm your email address`,
      email: "code",
      replacement:{
        code: generatedCode
      }
    });
    console.log(c);
    return "All good";
  },
  async checkCode(email: string, code:string){
    const time = 30 // minutes
    const codeObj = await getCode(email);
    const codeDate = new Date(codeObj.createdAt);
    const currDate = new Date();
    const diff = Math.round((currDate.getTime() - codeDate.getTime()) / 60000);
    
    if (diff > time || diff < 0) return "codeExp";
    if (codeObj.code !== code) return "codeInc";

    // For code expiry, minus seconds of db time and current time, to not be less than 1 hour
    return "good";
}
     
}
