import { INotification, addNotification, getUnreadNotification, updateNotification } from "..";
import { ObjectId } from 'mongodb';

export const notificationService = {
     async addNotification(data : INotification){
          const d:INotification = {
               ...data,
               createdAt: Date()
          }
          return await addNotification(d);
     },
     async getUnreadNotification(userId:string){
          return await getUnreadNotification(userId)
          // const d = {
          //      authorId: new ObjectId("63b030c13a37647b2079a2ce"),
          //      title: "Test notification",
          //      content: "Hello, Welcome to Interna",
          //      link: "www.getinterna.com",
          //      read: false,
          //      createdAt: Date()
          // }
          // return await addNotification(d);
     },
     async readNotification(_id:string){
          return await updateNotification({
               read: true,
          })
     }
}