import {connect, collections} from '../config.db'

export interface Log{ 
     message: string,
     location: string,
     time: string,
     type: 'error' | 'info',
}

export async function addlog(message:Log["message"], location:Log["location"], type:Log["type"]){
     const client = connect();
     let log:Log ={
          message,
          location,
          time: Date(),
          type
     }
     
     const response = await client.collection(collections.log).insertOne(log);
     return response;
}
