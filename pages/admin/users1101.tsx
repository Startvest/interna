import {NavigationBar} from '../../components/Admin';
import {Header} from '../../components/header';
import {useEffect, useState} from "react";
import {AdminContent, UserContent} from '../../components/Admin';
import {getUsers} from "../../services/waitlist";
import { useMutation } from 'react-query';
import {IUser} from '../api/waitlist';
import { useTheme } from 'next-themes';
import {LoadingIcon} from '../../components/loadScreen';

const Users = () => {
     const { resolvedTheme , setTheme} = useTheme();
     const [mounted, setMounted] = useState(false);
     const usersMutation = useMutation(getUsers);
     const [testusers, setUsers] = useState<IUser[]>([]);

     useEffect(() => {
         setMounted(true);
         getUsersAsync();
     }, []);

     const getUsersAsync = async () =>{
          await usersMutation.mutateAsync();
     }
     
      useEffect(() => {
          if(usersMutation.isSuccess){
               setUsers(usersMutation.data);
               console.log(usersMutation.data);
          }
          if(usersMutation.isError){
               console.log(usersMutation.error);
          }
          console.log(testusers);
        }, [usersMutation.isSuccess || testusers || usersMutation.isError]);

     if (!mounted) return null;
     return(
          <div>
               <Header pageName='Admin Users | Interna'/>
               <AdminContent>
                    <NavigationBar/>
                    {usersMutation.isLoading && <LoadingIcon/>}
                    {testusers && usersMutation.isSuccess && <UserContent users={testusers}/>}
               </AdminContent>
          </div>
     )

}

export default Users;
