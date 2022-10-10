import { waitlistDb } from "../db";

const waitlistService: any = {};

waitlistService.createWaitlistMember = async (data: any) => {
    return await waitlistDb.createWaitlistMember(data);
}

waitlistService.getMembers = async () => {
    return await waitlistDb.getMembers();
}

export { waitlistService };