
import { axios } from '../../config/axios';
import {IEmail} from '../../pages/api/email/email';

export async function sendAllEmail(data: Partial<IEmail>) {
  const res = await axios.post<IEmail>('/email/email', data, { headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
  return res.data;
}
export async function sendPreview(data: Partial<IEmail>) {
  const res = await axios.post<IEmail>('/email/preview', data, { headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
  return res.data;
}

