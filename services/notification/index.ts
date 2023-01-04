import { axios } from '../../config/axios';
import {INotification} from '../../server/db/Notification';

export async function getUnreadNotification(userId: string) {
     const res = await axios.get<INotification[]>(`/notification/unread?userId=${userId}`,{ headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
     return res.data;
}

export async function addNotification(data : Partial<INotification>) {
     const res = await axios.post<INotification>('/notification', data, { headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
     return res.data;
}