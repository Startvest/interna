import type { NextApiRequest, NextApiResponse } from 'next';
import { ICreateProfile } from '../../../server/db';
import {profileService} from '../../../server/services';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 's-maxage=10'); 
  if(req.headers.authorization !== process.env.NEXT_PUBLIC_AUTH){
    return res.status(401).json({"error": "You are not allowed to view this page"});
  }
  if (req.method === 'GET') {
          const username = req.query.username as string;
          const posts = await profileService.getProfileByUsername(username);
          return res.status(200).json(posts);
     }
     else if (req.method === 'POST') {
         const data = req.body as ICreateProfile;
         console.log(data);
        //  const posts = await profileService.addProfile(data);
          return res.status(500).json("An error occured. Please try again0");
    }else{
      return res.status(500).json({"error": "An error occured. Please try again"});
    }
  }