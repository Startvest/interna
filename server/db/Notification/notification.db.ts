import { ObjectId } from 'mongodb';
import {connect, collections} from '../config.db'

const client = connect();

export interface INotification {
     _id: ObjectId;
     authorId: ObjectId | string;
     title: string;
     content: string;
     createdAt: string;
     link?: string;
     read: boolean;
}

export async function addNotification(data: INotification){
     const response = await client.collection(collections.notification).insertOne(data);
     return response;
}


export async function getReadNotification(id: string){
     const response = await client.collection(collections.notification).findOne({ authorId : new ObjectId(id), read:true});
     if(response) return JSON.parse(JSON.stringify(response));
     return [];
}

export async function getUnreadNotification(userId: string){
     const response = await client.collection(collections.notification).findOne({ authorId : new ObjectId(userId), read:false});
     if(response) return JSON.parse(JSON.stringify(response));
     return [];
}

export async function updateNotification(data : Partial<INotification>){
     const response = await client.collection(collections.notification).updateOne(
          { id: data._id},      
               { $set: { 
                    ...data,
               } }                
       )
     return response;
}