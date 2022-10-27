import { Interface } from 'readline';
import { axios } from '../../config/axios';
import {IUser} from '../../pages/api/waitlist';


export async function addUser(data: Partial<IUser>) {
  const res = await axios.post<IUser>('/waitlist', data, { headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
  return res.data;
}

export async function getUsers() {
     const res = await axios.get<IUser[]>('/waitlist',{ headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
     return res.data;
}
