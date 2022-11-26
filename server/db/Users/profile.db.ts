const uuid = require('uuid');
import {connect} from '../config.db'

// const client = connect();

interface Profile{ 
     user_id: string;
     name: string;
     email: string;
     gender: "male" | "female" | "None";
     username: string;
     headline: string;
     skills: string[];
     link: string;
     position: {
          type: "string", 
          company_name: "string",
          start: "string",
          end: "string"
          current: boolean
     }[];
     last_login: string;
     connections: string[];
     created: string;
}