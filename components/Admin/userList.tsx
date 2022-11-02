import { Searchbar } from '../../components/Searchbar';
import styles from './admin.module.scss';
import {useEffect, useState} from "react";
import {getUsers} from "../../services/waitlist";
import {IUser} from '../../pages/api/waitlist';

export function UserContent ({users}:{users: IUser[]}){
     // const [users, setUsers] = useState<IUser[]>([]);
     // // const [users, setUsers] = useState<Promise<IUser[]>>(getUsers());
     // useEffect(() =>{
     //      renderUsers();
     //      console.log(users);
     // },[])

     // const renderUsers = async () =>{
     //      const c = await getUsers();
     //      console.log(users);
     //      setUsers(c);
     // }
     return(
          <div className={styles.userContent}>
             <h1>Hey Admin!</h1>
               <Searchbar 
                    placeholder="Search for anything"
                    onChange={(e) =>console.log(e)}
               /> 
               <div>
               {users && users.length > 0 && 
                    <>
                         {users.map((user,i) =>
                              <span key={i}>{user.name}</span>
                         )}
                         
                    </>
               }
               </div>               
          </div>

     )     
}