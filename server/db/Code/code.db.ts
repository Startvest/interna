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

}
