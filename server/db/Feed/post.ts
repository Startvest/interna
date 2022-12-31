const uuid = require('uuid');
import { ObjectId } from 'mongodb';
import {connect, collections} from '../config.db'

const client = connect();

export interface IComment{
     _id?: ObjectId;
     authorId: string;
     content: string;
     createdAt: string;
     likes: string[]; //emails array
}
export interface IPost{ 
     _id: ObjectId;
     authorId: ObjectId;
     image?: string;
     content: string;
     createdAt: string;
     comments: IComment[]
     likes: string[] //emails array 
}

export interface ICreatePost{ 
     _id?: ObjectId;
     authorId: string | ObjectId;
     image?: string;
     content: string;
     createdAt: string;
     comments: IComment[]
     likes: string[] //emails array 
}

export interface ICompletePost{ 
     _id: string | ObjectId;
     authorId: string | ObjectId;
     image?: string;
     content: string;
     createdAt: string;
     comments: IComment[]
     likes: string[] 
     author: {
          _id?: ObjectId | string,
          name: string,
          username: string,
          position: Object[],
          image: string
     }[]
}

export async function addPost(data: ICreatePost){
     const response = await client.collection(collections.post).insertOne(data);
     return response;
}

export async function getPosts(){
     const response = await client.collection(collections.post).find({})
                    .limit(0)
                    .skip(0)
                    .sort({createdAt: -1})
                    .toArray();

     if(response) return response.map((u:any) => JSON.parse(JSON.stringify(u)));;
     return [];
}

export async function getPostsComplete(){
     const response = await client.collection(collections.post).aggregate([
                         {
                           "$lookup": {
                             "from": "profile",
                             "localField": "authorId",
                             "foreignField": "_id",
                             "as": "author"
                           }
                         },
                         {
                              "$project": {
                                   "authorId": 1,
                                   "image": 1,
                                   "content": 1,
                                   "createdAt": 1,
                                   "comments": 1,
                                   "likes": 1,
                                   "author._id": 1,
                                   "author.name": 1,
                                   "author.username": 1,
                                   "author.position": 1,
                                   "author.image": 1,
                              }
                         }
                    ])
                    .sort({createdAt: -1})
                    .toArray();
                  
     if(response) return response.map((u:any) => JSON.parse(JSON.stringify(u)))
     return [];
}

export async function getPostById(id: string){
     const response = await client.collection(collections.post).findOne({ _id : new ObjectId(id) });
     if(response) return JSON.parse(JSON.stringify(response));
     return null;
}


export async function addLike(id: string){
     const response = await client.collection(collections.post).findOne({ _id : new ObjectId(id) });
     if(response) return JSON.parse(JSON.stringify(response));
     return null;
}

export async function unLike(id: string){
     const response = await client.collection(collections.post).findOne({ _id : new ObjectId(id) });
     if(response) return JSON.parse(JSON.stringify(response));
     return null;
}

export async function addComment(id: string){
     const response = await client.collection(collections.post).findOne({ _id : new ObjectId(id) });
     if(response) return JSON.parse(JSON.stringify(response));
     return null;
}