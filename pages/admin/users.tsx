import {NavigationBar} from '../../components/Admin';
import {Header} from '../../components/header';
import {useEffect, useState} from "react";
import {AdminContent, UserContent} from '../../components/Admin';
import {getUsers} from "../../services/waitlist";
import {IUser} from '../../pages/api/waitlist';
import { useTheme } from 'next-themes';

type UsersProps = {
     users: IUser[],
}
const Users: React.FC<UsersProps> = ({users}) => {
     const { resolvedTheme , setTheme} = useTheme();
     const [mounted, setMounted] = useState(false);
   
     useEffect(() => {
         setMounted(true);
     }, []);
   
     if (!mounted) return null;
     return(
          <div>
               <Header pageName='Admin Users | Interna'/>
               <AdminContent>
                    <NavigationBar/>
                    <UserContent users={users}/>
               </AdminContent>
          </div>
     )

}

export default Users;

import { GetServerSideProps } from 'next';
import { waitlistDb } from '../../server/db';
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
     const u = await waitlistDb.getMembers();
     const users = u.map((u:IUser) => JSON.parse(JSON.stringify(u)))
  
   return {
    props: {
     users
    }, // will be passed to the page component as props
  };
};