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
  res.setHeader('Cache-Control', 's-maxage=10'); 
  if(req.headers.authorization !== process.env.NEXT_PUBLIC_AUTH){
    console.log(process.env.NEXT_PUBLIC_AUTH);
    console.log(req.headers.authorization);
    return res.status(401).json({"error": "You are not allowed to view this page"});
  }
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
          subject: `Welcome to the family ${data.name}`,
          name: data.name,
          email: "email"
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