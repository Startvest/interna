import { Searchbar } from '../../components/Searchbar';
import styles from './admin.module.scss';
import {useEffect, useState} from "react";
import {getUsers} from "../../services/waitlist";
import {IUser} from '../../pages/api/waitlist';
import DisplayDate from '../DisplayDate';

export function UserContent ({users}:{users: IUser[]}){
     return(
          <div className={styles.userContent}>
             <h1>Hey Admin!</h1>
             <h3>These are our current users <span className='secondary'>{users.length} Users</span></h3>
               <Searchbar 
                    placeholder="Search for anything"
                    onChange={(e) =>console.log(e)}
               /> 
               {!users &&
               <>
               
               </>}
               {users && users.length > 0 && 
                    <div className={styles.scrollTable}>
                    <table className={styles.userContainer}>
                              <tr>
                                   <th> </th>
                                   <th>Name</th>
                                   <th>Email</th>
                                   <th>Position</th>
                                   <th>Date joined</th>
                              </tr>
                         {users.map((user,i) =>
                              <tr key={i}>
                                   <td>{i+1}</td>
                                   <td>{user.name}</td>
                                   <td>{user.email}</td>
                                   <td><span className="secondary">{user.position.type.toString()}</span> at {user.position.company_name}</td>
                                   <td><DisplayDate date={user.created} show={'datetime'} /></td>
                              </tr>
                         )}
                     
                    </table>
                    <div className={styles.userCount}>
                         Showing {users.length} users
                    </div>
                    </div>
               }             
          </div>

     )     
}