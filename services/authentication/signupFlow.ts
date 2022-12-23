import {IUser} from "../../server/db";
import { axios } from '../../config/axios';

export async function SigninPasswordUser(data: Partial<IUser>){
     const res = await axios.post<IUser | null>('/auth/signinuser', data, { headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
     return res.data;
}


