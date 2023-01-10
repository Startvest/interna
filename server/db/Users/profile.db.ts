const uuid = require('uuid');
import { ObjectId } from 'mongodb';
import { collections, connect } from '../config.db';

const client = connect();

export interface IProfile {
  _id: ObjectId;
  name: string;
  email: string;
  gender: 'male' | 'female' | 'none';
  username: string;
  banner: string;
  image: string;
  headline: string;
  skills: string[];
  link: string;
  position: {
    type: string;
    company_name: string;
    start: string;
    end: string;
    current: boolean;
  }[];
  last_login: string;
  location: string;
  connections: string[]; //_id
  createdAt: string;
}

export interface ICreateProfile {
  _id?: ObjectId;
  name: string;
  email: string;
  banner?: string;
  image: string;
  gender: 'male' | 'female' | 'none';
  username: string;
  headline: string;
  skills: string[];
  link: string;
  position: IExperience[];
  last_login?: string;
  location: string;
  connections?: string[];
  createdAt: string;
}
export interface IExperience {
  type: 'student' | 'intern';
  company_name: string;
  start: string;
  end: string;
  current: boolean;
  logo?: string;
}

export async function addProfile(data: ICreateProfile) {
  const response = await client.collection(collections.profile).insertOne(data);
  return response;
}

export async function getProfileById(id: string) {
  const response = await client
    .collection(collections.profile)
    .findOne({ _id: new ObjectId(id) });
  if (response) return JSON.parse(JSON.stringify(response));
  return null;
}

export async function getProfileByUsername(username: string) {
  const response = await client
    .collection(collections.profile)
    .findOne({ username: username });
  if (response) return JSON.parse(JSON.stringify(response));
  return null;
}

export async function getProfileByEmail(email: string) {
  const response = await client
    .collection(collections.profile)
    .findOne({ email: email });
  if (response) return JSON.parse(JSON.stringify(response));
  return null;
}

export async function updateProfile(user: Partial<IProfile>) {
  const response = await client.collection(collections.profile).updateOne(
    { id: user._id },
    {
      $set: {
        ...user,
      },
    }
  );
  return response;
}
