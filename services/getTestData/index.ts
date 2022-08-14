import {axios} from '../../config/axios';

export async function getdata() {
     const res = await axios.get("/hello");
     return res.data;
}
