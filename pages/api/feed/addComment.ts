import type { NextApiRequest, NextApiResponse } from 'next';
import { ICreateComment } from '../../../server/db/Feed';
import {postService} from '../../../server/services';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     res.setHeader('Cache-Control', 's-maxage=10'); 
     if(req.headers.authorization !== process.env.NEXT_PUBLIC_AUTH){
       return res.status(401).json({"error": "You are not allowed to view this page"});
     }

     if (req.method === 'POST') {
          const postId = req.body.postId as string;
          const commentbody = req.body.comment as ICreateComment;
          try{
               const f = await postService.addComment(postId, commentbody);
               console.log(f);
               return res.status(200).json("Comment added successfully");
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