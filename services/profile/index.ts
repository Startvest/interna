import { axios } from '../../config/axios';
import {IProfile, ICreateProfile} from '../../server/db/Users';

export async function getProfile(id:string) {
     const res = await axios.get<IProfile>(`/feed/profile?id=${id}`,{ headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
     return res.data;
}
