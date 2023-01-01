import { ICreatePost, getPosts, getPostsComplete, getPostById, addPost, addLike, unLike, ICreateComment, addComment } from "..";
import { ObjectId } from 'mongodb';

export const postService = {
     async getPosts(){
          return await getPostsComplete();
     },
     async getPost(id: string){
          return await getPostById(id);
     },
     async addPost(post: ICreatePost){
          const p : ICreatePost = {
               ...post,
               createdAt: Date.toString(),
               authorId: new ObjectId(post.authorId)
          }
          return await addPost(p);
     },
     async likePost(id: string, likeId: string){
          return await addLike(id, likeId);
     },
     async unlikePost(id: string, likeId: string){
          return await unLike(id, likeId);
     },
     async addComment(postId:string, comment: ICreateComment){
          const c : ICreateComment = {
               ...comment,
               createdAt: Date.toString(),
               authorId: new ObjectId(comment.authorId)
          }
          return await addComment(postId, c);
     },
}