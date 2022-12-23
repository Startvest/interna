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
     // db.members.createIndex( { "user_id": 1 }, { unique: true } )
     const response = await client.collection(collections.code).insertOne(code);
     console.log(response);
     return response;
}

export async function getCode(email: string){
     const client = connect();

     const response = await client.collection(collections.code).findOne({ email : email });
     if(response) return JSON.parse(JSON.stringify(response));
     return null;
}

export async function deleteCode(email: string){
     const client = connect();

     const response = await client.collection(collections.code).findOne({ email : email });
     if(response) return JSON.parse(JSON.stringify(response));
     return null;
}

export async function updateCode(data: Partial<ICode>){
     const client = connect();

     const response = await client.collection(collections.code).updateOne(
          { email: data.email},      
               { $set: { 
                    ...data,
                    createdAt:  Date().toString()
               } }                
       )
          return response;
}
