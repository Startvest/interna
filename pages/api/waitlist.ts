import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.status(200).json({content: "Waitlist"});
      break
    case 'POST':
      res.status(200).json({content: "successful"});
      break
    default:
      res.status(405).end() //Method Not Allowed
      break
  }
}