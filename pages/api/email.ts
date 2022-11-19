import type { NextApiRequest, NextApiResponse } from 'next';
import { waitlistService } from '../../server/services';
import {sendMail} from "../../server/mail";

export interface IEmail {
  subject: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Cache-Control', 's-maxage=10');
  if (req.headers.authorization !== process.env.NEXT_PUBLIC_AUTH) {
    console.log(process.env.NEXT_PUBLIC_AUTH);
    console.log(req.headers.authorization);
    return res
      .status(401)
      .json({ error: 'You are not allowed to view this page' });
  }

  if (req.method === 'GET') {
    let serRes = await waitlistService.getMembers();
    if (serRes) {
      return res.status(200).json({ response: serRes });
    } else {
      return res
        .status(500)
        .json({ error: 'An error occured. Please try again' });
    }
  } else if (req.method === 'POST') {
    const data = req.body as IEmail;

    let serRes = await waitlistService.getMembers(data);

    if (serRes) {
        serRes.slice(0,2).forEach(async (element: any) => {
          console.log(element.email);
          console.log(element.name);
          await sendMail({
               to: "hanif.adeotun@gmail.com",
               name: "Hanif",
               subject: data.subject,
               email: "waitlist1"
             })
        });
      return res.status(201).json({ response: 'Successfull' });

    } else {
      return res
        .status(500)
        .json({ error: 'An error occured. Please try again' });
    }
  } else {
    return res.status(405).end();
  }
}
