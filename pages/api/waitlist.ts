import type { NextApiRequest, NextApiResponse } from 'next';
import { waitlistService } from './services';

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
    let serRes = await waitlistService.createWaitlistMember(req.body);
    // console.log(serRes);

    if (serRes) { 
      if (serRes === "User with that email exists already.") {
        res.status(400).json({"response": "Email has already been used."})
      }
      else {
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