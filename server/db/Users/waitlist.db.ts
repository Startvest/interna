const uuid = require('uuid');
import {connect, collections} from '../config.db'
import {IUser} from '../../../pages/api/waitlist';

interface WaitlistMember {
  waitlist_id: string;
  name: string;
  email: string;
  position: {
    type: "string", 
    company_name: "string"
  };
  created: string
}


export const waitlistDB = {
  async createWaitlistMember (data: WaitlistMember) {
    const client = connect();
      try {
        let member: WaitlistMember = {
          waitlist_id: uuid.v4(),
          name: data.name,
          email: data.email.toLowerCase(),
          position: data.position,
          created: Date().toString()
        };

        let email_check = await client.collection(collections.waitlist).findOne({email: member.email});

        if (email_check) {
          return "User with that email exists already.";
        }

        const response = await client.collection(collections.waitlist).insertOne(member);

        console.log(`New member added. ID: ${response.insertedId}`)

        return response;
      }

      catch (err) {
          console.log(err);

          return false;
      }
  },

  async getMembers(){
    const client = connect();
      try {
        const results = await client.collection(collections.waitlist).find({}).toArray();
        return results.map((u:any) => JSON.parse(JSON.stringify(u)));
      }

      catch (err) {
          console.log(err);
          return [];
      }
  }
}
