export interface IComment{
     _id: string;
     author: {
       id: string;
       name: string;
       position: string;
       image: string;
     };
     content: string;
     createdAt: string;
     likes: string[]
}

export interface IPost{
     _id: string,
     author: {
       id: string,
       name: string,
       position: string,
       image: string,
     };
     content: string,
     createdAt: string,
     image?: string,
     likes: string[]
     comments: IComment[],
}

