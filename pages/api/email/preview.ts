import type { NextApiRequest, NextApiResponse } from 'next';
import { waitlistService } from '../../../server/services';
import {sendMail} from "../../../server/mail";

export interface IEmail {
  subject: string;
  type?: string;
  limit?: []
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Cache-Control', 's-maxage=10');
  if (req.headers.authorization !== process.env.NEXT_PUBLIC_AUTH) {
    return res
      .status(401)
      .json({ error: 'You are not allowed to view this page' });
  }

  if (req.method === 'POST') {
    const data = req.body as IEmail;

          await sendMail({
          //     to: element.email,
              to: 'hanif.adedotun@gmail.com',
               // to: 'hanif.adedotun@gmail.com, steven.oshoke@gmail.com, dusiere40@gmail.com, obriggs03@gmail.com, fortunealebiosu710@gmail.com',
               name: "Core team (test)",
               subject: data.subject,
               email: "blog"
             })
          // console.log(`${index} Sent to ${element.name} : ${element.email}`);

      return res.status(201).json({ response: 'Successfull' });

    } 
     else {
     return res.status(500).json({ error: 'An error occured. Please try again' });
  }
}
