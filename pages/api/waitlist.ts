import type { NextApiRequest, NextApiResponse } from 'next';
import { waitlistService } from '../../server/services';
import {sendMail} from "../../server/mail";
export interface IUser {
  waitlist_id: string;
  name: string;
  email: string;
  position: {
       type: string, 
       company_name: string
  };
  created: string
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    let serRes = await waitlistService.getMembers();
    if (serRes) {
      return res.status(200).json({"response": serRes});
    }
    else {
      return res.status(500).json({"error": "An error occured. Please try again"});
    }
  }
  
  else if (req.method === 'POST') {
    const data = req.body as IUser;

    if(data.email.length < 0){
      return res.status(500).json({"error": "An error occured. Please try again"});
    }
    let serRes = await waitlistService.createWaitlistMember(data);
    // console.log(serRes);

    if (serRes) { 
      if (serRes === "User with that email exists already.") {
        res.status(400).json({"response": "Email has already been used."})
      }
      else {
        const email = await sendMail({
          to: data.email, 
          name: data.name
        })
        console.log(email);
        return res.status(201).json({"response": "Member created successfully"});
      }
    }
    else {
      return res.status(500).json({"error": "An error occured. Please try again"});
    }
  }

  else {
    return res.status(405).end()
  }
}