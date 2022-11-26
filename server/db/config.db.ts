// Configure monog Db server and connected
import * as mongoDB from "mongodb";

export const collections = {
     waitlist: "waitlist",
     log: "logs"
}
export function connect(){
     const { MongoClient, ServerApiVersion } = require('mongodb');
     const uri: string = `${process.env.DB_URL}`;

     const client: mongoDB.MongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

     const db: mongoDB.Db = client.db(process.env.DB_NAME);
     return db;    
}


