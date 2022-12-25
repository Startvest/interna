import { randomUUID } from 'crypto';
import {adminUsers, addUser, IUser, updateUser} from '..';
const uuid = require('uuid');
import bcrypt from "bcrypt";

export const userService = {

  async addUser(data: {email: string, password: string, verified: boolean}){
     // Set userId 
     // mask password (import bcrypt from "bcryptjs";)
     // Set role
     // and save
     const role = adminUsers.includes(data.email) ? 'Administrator':'Basic User';
     const hash = bcrypt.hashSync(data.password, 10);
     //bcrypt.compareSync(myPlaintextPassword, hash); // true
     let user = {
      ...data,
      user_id: uuid.v4(),
      password: hash,
      role: role
     }
     return await addUser(user as IUser); 
  },

  async updateUser(user: Partial<IUser>) {
    return await updateUser(user); 
  }
}