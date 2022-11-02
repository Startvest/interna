import {NavigationBar} from '../../components/Admin';
import {Header} from '../../components/header';
import {useEffect, useState} from "react";
import {AdminContent} from '../../components/Admin';
import {getUsers} from "../../services/waitlist";
import {IUser} from '../../pages/api/waitlist';

const Users = () => {
     const [users, setUsers] = useState<IUser[]>([]);
     // const [users, setUsers] = useState<Promise<IUser[]>>(getUsers());
     useEffect(() =>{
          // renderUsers();
          console.log("users");
     },[]);
     const renderUsers = async () =>{
          const c = await getUsers();
          console.log(users);
          setUsers(c);
     }
     return(
          <>
               <Header pageName='Admin Users | Interna'/>
               <AdminContent>
                    <NavigationBar/>
                    {/* <UserContent users={users}/> */}
               </AdminContent>
          </>
     )

}

export default Users;