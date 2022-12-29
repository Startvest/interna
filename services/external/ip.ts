import { axios } from '../../config/axios';

export async function LocationLookup(){
     console.log(process.env.NEXT_PUBLIC_IP_API);
     // const res = await axios.get(`https://api.ipregistry.co/?key=${process.env.NEXT_PUBLIC_IP_API}`);
     const res = await axios.get(`https://api.ipregistry.co/?key=tryout`);
     const locData = {
          ip: res.data.ip,
          city: res.data.location.city,
          country: res.data.location.country.name,
     }
     return locData;
}
