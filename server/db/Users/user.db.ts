const uuid = require('uuid');
import {connect} from '../config.db'

const authDb: any = {};
const client = connect();


interface User{ 
     user_id: string;
     username: string;
     email: string;
     password: string;
     role: "Administrator" | "Basic User" | "Premium" | "Premium Plus";
}

export function addUser(){

}

export function getUserbyId(){

}

export function getUserbyUsername(){

}