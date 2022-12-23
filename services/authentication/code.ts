import {IUser} from "../../server/db";
import { axios } from '../../config/axios';

interface IResponse {
     server: string
}
export async function VerifyCode(data: {email: string, code: string}){
     const res = await axios.post<IResponse>('/auth/verifycode', data, { headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
     return res.data;
}
