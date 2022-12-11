import type { NextApiRequest, NextApiResponse } from 'next';
import { waitlistService } from '../../../server/services';
import {sendMail} from "../../../server/mail";
import { IUser } from '../../../server/db';
import {addCode} from '../../../server/db/Code';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     res.setHeader('Cache-Control', 's-maxage=10'); 
     if(req.headers.authorization !== process.env.NEXT_PUBLIC_AUTH){
       return res.status(401).json({"error": "You are not allowed to view this page"});
     }
     if (req.method === 'POST') {
      const data = req.body as IUser;
      console.log(data);
      let c = await addCode({
        email: data.email,
        code: '3432',
      })
      console.log(c);
      // check user by email
     // Check if user exists
     // send Email to user
     // Return user object;
     return res.status(200).json(data);
     }
}