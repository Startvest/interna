import { axios } from '../../config/axios';
import {IPost, ICompletePost, ICreatePost, ICreateComment} from '../../server/db/Feed';

export async function getPosts() {
     const res = await axios.get<ICompletePost[]>('/feed/post',{ headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
     return res.data;
}

export async function addPost(data : Partial<ICreatePost>) {
     const res = await axios.post<IPost>('/feed/post', data, { headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
     return res.data;
}

export async function getPostbyId(id: string){
     const res = await axios.get<IPost>(`/feed/postid?id=${id}`,{ headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
     return res.data;
}
export async function likePost(data: {id: string, likeId:string}){
     const res = await axios.post(`/feed/likePost`, data, { headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
     return res.data;
}
export async function unlikePost(data: {id: string, likeId:string}){
     const res = await axios.post(`/feed/unLikePost`,data,{ headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
     return res.data;
}

export async function addComment(data: {postId: string, comment:ICreateComment}){
     const res = await axios.post(`/feed/addComment`,data,{ headers: {"Authorization" : `${process.env.NEXT_PUBLIC_AUTH}`} });
     return res.data;
}
