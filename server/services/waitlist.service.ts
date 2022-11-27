import { waitlistDB } from "../db";


export const waitlistService = {
    async createWaitlistMember(data: any) {
        return await waitlistDB.createWaitlistMember(data);
    },

    async getMembers()  {
        return await waitlistDB.getMembers();
    }
}