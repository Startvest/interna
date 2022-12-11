import {connect, collections} from '../config.db'

export interface ICode{ 
     email: string,
     code: string,
     createdAt?: string,
}

export async function addCode(data: ICode){
     const client = connect();
     let code:ICode = {
          ...data,
          createdAt:  Date().toString()
     }

     const response = await client.collection(collections.code).insertOne(code);
     return response;
}

export function checkCode(){
     // For code expiry, minus seconds of db time and current time, to not be less than 1 hour
}
