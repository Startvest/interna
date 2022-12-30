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
     _id?: ObjectId;
     authorId: string;
     image?: string;
     content: string;
     createdAt: string;
     comments: IComment[]
     likes: string[] //emails array 
}


export async function addPost(data: IPost){
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

export async function getPostById(id: string){
     const response = await client.collection(collections.post).findOne({ _id : new ObjectId(id) });
     console.log(response);
     if(response) return JSON.parse(JSON.stringify(response));
     return null;
}