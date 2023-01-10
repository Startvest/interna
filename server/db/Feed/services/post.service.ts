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
               createdAt: Date(),
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
               createdAt: Date(),
               authorId: new ObjectId(comment.authorId)
          }
          console.log(c);
          // return await addComment(postId, c);
          return [{
               authorId: new ObjectId("63b030c13a37647b2079a2ce"),
               content: 'dad',
               createdAt: 'Wed Jan 04 2023 20:19:17 GMT+0100 (West Africa Standard Time)',      
               likes: []
          }]
     },
}