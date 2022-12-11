import {connect, collections} from '../config.db'

export interface ILog{ 
     message: string,
     location: string,
     time: string,
     type: 'error' | 'info',
}

export async function addlog(message:ILog["message"], location:ILog["location"], type:ILog["type"]){
     const client = connect();
     let log:ILog ={
          message,
          location,
          time: Date(),
          type
     }
     
     const response = await client.collection(collections.log).insertOne(log);
     return response;
}
