const uuid = require('uuid');
import {connect, collections} from '../config.db'

const authDb: any = {};
const client = connect();


export interface IUser{ 
     user_id: string;
     email: string;
     password: string;
     verified: boolean;
     role: "Administrator" | "Basic User" | "Premium" | "Premium Plus";
}
export const adminUsers = [
     'hanif@getinterna.com',
     'steven@getinterna.com',
     'fortune@getinterna.com',
]

export async function addUser(data: IUser){
     const client = connect();

     const response = await client.collection(collections.users).insertOne(data);
     return response;
}

export async function getUserbyId(id: string){
     const client = connect();

     const response = await client.collection(collections.users).findOne({ user_id : id });
     if(response) return JSON.parse(JSON.stringify(response));
     return null;
}

export async function getUserbyEmail(email: string){
     const client = connect();

     const response = await client.collection(collections.users).findOne({ email : email });
     if(response) return JSON.parse(JSON.stringify(response));
     return null;
}

export async function updateUser(user : Partial<IUser>){
     const client = connect();

     const response = await client.collection(collections.users).updateOne(
          { email: user.email},      
               { $set: { 
                    ...user,
               } }                
       )
          return response;
}