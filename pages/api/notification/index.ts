import type { NextApiRequest, NextApiResponse } from 'next';
import { INotification } from '../../../server/db/Notification';
import {notificationService} from '../../../server/services';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 's-maxage=10'); 
  if(req.headers.authorization !== process.env.NEXT_PUBLIC_AUTH){
    return res.status(401).json({"error": "You are not allowed to view this page"});
  }
  if (req.method === 'POST') {
          const notification = req.body as INotification;
          const posts = await notificationService.addNotification(notification);
          return res.status(200).json(posts);
     }
    else {
      return res.status(500).json({"error": "An error occured. Please try again"});
    }
  }