import { IPost, getPosts, getPostById, addPost } from "..";

export const postService = {
     async getPosts(){
          return await getPosts();
     },
     async getPost(id: string){
          return await getPostById(id);
     },
     async addPost(post: IPost){
          const p : IPost = {
               ...post,
               createdAt: Date.toString(),
          }
          return await addPost(post);
     },
}