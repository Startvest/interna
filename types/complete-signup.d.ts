import { Resume } from "./resume";

export interface CompleteSignup {
    name: string,
    username: string,
    email: string,
    gender: 'male'|'female'|'unspecified'|undefined,
    resume: Resume[],
    skills: string[],
    headline: string,
    link: string,
}