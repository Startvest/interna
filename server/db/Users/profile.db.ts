const uuid = require('uuid');
import { ObjectId } from 'mongodb';
import {connect, collections} from '../config.db'

const client = connect();

export interface IProfile{ 
     _id: ObjectId;
     name: string;
     email: string;
     gender: "male" | "female" | "none";
     username: string;
     image: string;
     headline: string;
     skills: string[];
     link: string;
     position: {
          type: string, 
          company_name: string,
          start: string,
          end: string
          current: boolean
     }[];
     last_login: string;
     connections: string[];
     createdAt: string;
}

export interface ICreateProfile{ 
     _id?: ObjectId;
     name: string;
     email: string;
     image: string;
     gender: "male" | "female" | "none";
     username: string;
     headline: string;
     skills: string[];
     link: string;
     position: {
          type: string, 
          company_name: string,
          start: string,
          end: string
          current: boolean
     }[];
     last_login: string;
     connections: string[];
     createdAt: string;
}

export async function addProfile(data: ICreateProfile){
     const response = await client.collection(collections.profile).insertOne(data);
     return response;
}


export async function getProfileById(id: string){
     const response = await client.collection(collections.profile).findOne({ id : id });
     if(response) return JSON.parse(JSON.stringify(response));
     return null;
}

export async function getProfileByEmail(email: string){
     const response = await client.collection(collections.profile).findOne({ email : email });
     if(response) return JSON.parse(JSON.stringify(response));
     return null;
}

export async function updateProfile(user : Partial<IProfile>){
     const client = connect();

     const response = await client.collection(collections.users).updateOne(
          { id: user._id},      
               { $set: { 
                    ...user,
               } }                
       )
          return response;
}