import type { NextApiRequest, NextApiResponse } from 'next';
import { IPost } from '../../../server/db/Feed';
import {postService} from '../../../server/services';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     res.setHeader('Cache-Control', 's-maxage=10'); 
     if(req.headers.authorization !== process.env.NEXT_PUBLIC_AUTH){
       return res.status(401).json({"error": "You are not allowed to view this page"});
     }
     if (req.method === 'GET') {
          const posts = await postService.getPosts()
          return res.status(200).json(posts);
     }
     
     else if (req.method === 'POST') {
          const data = req.body as IPost;
          try{
               await postService.addPost(data);
               return res.status(200).json("Added successfully");
          }catch(e){
               return res.status(500).json(e);
          }
     }
}