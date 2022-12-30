import { axios } from '../../config/axios';
import {IPost} from '../../server/db/Feed';

export async function getPosts() {
     const res = await axios.get<IPost[]>('/feed/post',{ headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
     return res.data;
}

export async function addPost(data : Partial<IPost>) {
     const res = await axios.post<IPost>('/feed/post', data, { headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
     return res.data;
}

export async function getPostbyId(id: string){
     const res = await axios.get<IPost>(`/feed/postid?id=${id}`,{ headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
     return res.data;
}
