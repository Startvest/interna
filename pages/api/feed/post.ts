import type { NextApiRequest, NextApiResponse } from 'next';
import { ICreatePost } from '../../../server/db/Feed';
import {postService, profileService} from '../../../server/services';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     res.setHeader('Cache-Control', 's-maxage=10'); 
     if(req.headers.authorization !== process.env.NEXT_PUBLIC_AUTH){
       return res.status(401).json({"error": "You are not allowed to view this page"});
     }
     if (req.method === 'GET') {
          const posts = await postService.getPosts();
          // const c = await profileService.addProfile(
          //      {
          //            name: "Hanif Adedotun",
          //            email: "hanif.adedotun@gmail.com",
          //            gender: "male",
          //            username: "@hanif",
          //            headline: "This is a test account",
          //            skills: ["Coding", "Public speaking"],
          //            link: "devhanif.com",
          //            position: [{
          //                 type: "internship", 
          //                 company_name: "Ntrna Technologies",
          //                 start: "22-11-2022",
          //                 end: "",
          //                 current: true,
          //            }],
          //            "last_login": "Mon Dec 30 2022 07:34:34 GMT+0100 (West Africa Standard Time)",
          //            "connections": [],
          //            "createdAt": "Sat Dec 31 2022 13:44:08 GMT+0100 (West Africa Standard Time)",
          //         }
          // )
          return res.status(200).json(posts);
     }
     
     else if (req.method === 'POST') {
          const data = req.body as ICreatePost;
          try{
               await postService.addPost(data);
               return res.status(200).json("Added successfully");
          }catch(e){
               return res.status(500).json(e);
          }
     }
}