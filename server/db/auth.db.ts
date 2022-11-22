const uuid = require('uuid');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri: string = `${process.env.DB_URL}`;
const db_name: string = `${process.env.DB_NAME}`;

const authDb: any = {};

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

class User {
    public user_id: string;
    public name: string;
    public email: string;
    public username: string;
    public mobile: string;
    public password: string;
    public created: string;
    public last_login: string;
    public role_id: number

    public constructor(
        user_id: string, name: string, email: string, username: string, mobile: string = "",
        password: string, created: string, last_login: string,  role_id: number
        ) {
        this.user_id = user_id;
        this.name = name;
        this.email = email;
        this.username = username;
        this.mobile = mobile;
        this.password = password;
        this.created = created;
        this.last_login = last_login;
        this.role_id = role_id;
    }
}

// different roles of users in the system
const roles = {
    1: "Administrator",
    2: "Basic User",
    3: "Premium",
    4: "Premium Plus"
}

export {{ authDb }};