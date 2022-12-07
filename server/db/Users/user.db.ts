const uuid = require('uuid');
import {connect} from '../config.db'

const authDb: any = {};
const client = connect();


interface User{ 
     user_id: string;
     email: string;
     password: string;
     verified: boolean;
     role: "Administrator" | "Basic User" | "Premium" | "Premium Plus";
}

export function addUser(){

}

export function getUserbyId(){

}

export function getUserbyUsername(){

}