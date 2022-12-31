import { ICreateProfile, addProfile, getProfileByEmail, getProfileById } from "..";


export const profileService = {
     async addProfile(data : ICreateProfile){
          const c = await addProfile(data);
          return c;
     },
     async getProfileByEmail(email : string){
          const c = await getProfileByEmail(email);
          return c;
     },
     async getProfileById(id : string){
          const c = await getProfileById(id);
          return c;
     }
}