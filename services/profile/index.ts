import { axios } from '../../config/axios';
import {IProfile, ICreateProfile} from '../../server/db/Users';

export async function getProfile(username:string) {
     const res = await axios.get<IProfile>(`/feed/profile?username=${username}`,{ headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
     return res.data;
}
