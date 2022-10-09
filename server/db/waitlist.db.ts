const uuid = require('uuid');

const { MongoClient, ServerApiVersion } = require('mongodb');
const url: string = process.env.DB_URL || "mongodb://127.0.0.1:27017/";
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASS}@internadb.1a9jv1q.mongodb.net/?retryWrites=true`;
const db_name: string = process.env.DB_NAME || "interna_db";

const waitlistDb : any = {};

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

class WaitlistMember {
  public waitlist_id: string;
  public name: string;
  public email: string;
  public position: {type: "string", company_name: "string"};

  public constructor(waitlist_id: string, name: string, email: string, position: {type: "string", company_name: "string"}) {
      this.waitlist_id = waitlist_id;
      this.name = name;
      this.email = email;
      this.position = position;
  }
}

waitlistDb.createWaitlistMember = async (data: {name: string, email: string, position: {type: "string", company_name: "string"}} ) => {
    try {
      await client.connect();
      let member: {waitlist_id: string, name: string, email: string, position: {type: "string", company_name: "string"}} = {
        waitlist_id: uuid.v4(),
        name: data.name,
        email: data.email,
        position: data.position
      };

      let email_check = await client.db(db_name).collection("waitlist").findOne({email: member.email});

      if (email_check) {
        return "User with that email exists already.";
      }

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
      console.log(results);

      for (let result of results) {
        response.push(new WaitlistMember(result.waitlist_id, result.name, result.email, result.position));
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