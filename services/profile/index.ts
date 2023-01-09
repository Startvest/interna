import { axios } from '../../config/axios';
import {IProfile, ICreateProfile} from '../../server/db/Users';

export async function getProfile(username:string) {
     const res = await axios.get<IProfile>(`/profile?username=${username}`,{ headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
     return res.data;
}
export async function addProfile(data: ICreateProfile){
     const res = await axios.post<IProfile>(`/profile`, data, { headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
     return res.data;
}

