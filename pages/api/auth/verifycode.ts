import type { NextApiRequest, NextApiResponse } from 'next';
import { codeService } from '../../../server/services';
import {sendMail} from "../../../server/mail";
import { IUser } from '../../../server/db';
import {addCode} from '../../../server/db/Code';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     res.setHeader('Cache-Control', 's-maxage=10'); 
     if(req.headers.authorization !== process.env.NEXT_PUBLIC_AUTH){
       return res.status(401).json({"error": "You are not allowed to view this page"});
     }
     if (req.method === 'POST') {
      const data = req.body as {email: string, code: string};
      console.log(data);

      try{ 
        const checkCode = await codeService.checkCode(req.body.email, req.body.code);
        // check user by emaild
       // Check if user exists
       // send Email to user
       // Return user object;
       if (checkCode == "codeExp") return res.status(409).json("Code has expired");
       if (checkCode == "codeInc") return res.status(410).json("Code is incorrect");

       return res.status(200).json("Code correct");
      }catch(e){
        return res.status(500).json("Server Error");
      }

     }
}