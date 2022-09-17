import styles from './navbar.module.css';
import {useRouter} from 'next/router';
import {
     IoAlbumsOutline,
     IoSearchOutline,
     IoNotificationsOutline,
     IoMailOutline,
     IoMailUnreadOutline,
     IoSettingsOutline
   } from 'react-icons/io5';

interface pathNames{
     path: '/feed' | '/search' |'/notifications' | '/messages' | '/settings'
}
export function NavBar(){
     const router = useRouter();
     // console.log(router.pathname);
     return(
          <div className={styles.container}>
               <IoAlbumsOutline size={30} className={styles.icon} />
               <IoSearchOutline size={30} className={styles.icon} />
               <IoNotificationsOutline size={30} className={styles.icon} />
               <IoMailUnreadOutline size={30} className={styles.icon} />
               <IoSettingsOutline size={30} className={styles.icon} />
          </div>
     )
}
