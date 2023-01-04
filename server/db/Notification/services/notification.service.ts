import { INotification, addNotification, getUnreadNotification, updateNotification } from "..";


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
     },
     async readNotification(_id:string){
          return await updateNotification({
               read: true,
          })
     }
}