const uuid = require('uuid');

let MongoClient = require('mongodb').MongoClient;
const url: string = "mongodb://127.0.0.1:27017/";
const db_name: string = "interna_db";

const waitlistDb : any = {};

const client = new MongoClient(url);

class WaitlistMember {
  public waitlist_id: string;
  public name: string;
  public email: string;

  public constructor(waitlist_id: string, name: string, email: string) {
      this.waitlist_id = waitlist_id;
      this.name = name;
      this.email = email;
  }
}

waitlistDb.createWaitlistMember = async (data: {name: string, email: string} ) => {
    try {
      await client.connect();
      let member: {waitlist_id: string, name: string, email: string} = {
        waitlist_id: uuid.v4(),
        name: data.name,
        email: data.email
      };

      const response = await client.db(db_name).collection("waitlist").insertOne(member);

      console.log(`New member added. ID: ${response.insertedId}`)

      client.close();

      return response;
    }

    catch (err) {
        console.log(err);

        return false;
    }
}

waitlistDb.getMembers = async () => {
    try {
      await client.connect();
      let response: any[] = [];
      
      const results = await client.db(db_name).collection("waitlist").find({}).toArray();

      for (let result of results) {
        response.push(new WaitlistMember(result.waitlist_id, result.name, result.email));
      }

      client.close();

      console.log(response);

      return response;

    }

    catch (err) {
        console.log(err);
        return false;
    }
}

export { waitlistDb };