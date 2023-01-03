import { ICreateProfile, addProfile, getProfileByEmail, getProfileById, getProfileByUsername } from "..";


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
     },
     async getProfileByUsername(username : string){
          const c = await getProfileByUsername(username);
          return c;
     }
}