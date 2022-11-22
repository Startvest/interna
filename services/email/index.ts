
import { axios } from '../../config/axios';
import {IEmail} from '../../pages/api/email';

export async function sendAllEmail(data: Partial<IEmail>) {
  const res = await axios.post<IEmail>('/email', data, { headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
  return res.data;
}

