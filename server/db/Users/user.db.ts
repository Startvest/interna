const uuid = require('uuid');
import {connect} from '../config.db'

const authDb: any = {};
const client = connect();


export interface IUser{ 
     user_id: string;
     email: string;
     password: string;
     verified: boolean;
     role: "Administrator" | "Basic User" | "Premium" | "Premium Plus";
}

export function addUser(){
     // Set userId 
     // mask password (import bcrypt from "bcryptjs";)
     // Set role
     // and save
}

export function getUserbyId(){

}

export function getUserbyUsername(){

}

export function updateUser(){

}