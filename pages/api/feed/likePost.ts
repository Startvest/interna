import type { NextApiRequest, NextApiResponse } from 'next';
import {postService} from '../../../server/services';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     res.setHeader('Cache-Control', 's-maxage=10'); 
     if(req.headers.authorization !== process.env.NEXT_PUBLIC_AUTH){
       return res.status(401).json({"error": "You are not allowed to view this page"});
     }

     if (req.method === 'POST') {
          const id = req.body.id as string;
          const likeId = req.body.likeId as string;
          try{
               const f = await postService.likePost(id, likeId);
               console.log(f);
               return res.status(200).json("Like added successfully");
          }catch(e){
               return res.status(500).json(e);
          }
     }
     else {
          return res
            .status(500)
            .json({ error: 'An error occured. Please try again' });
        }
}