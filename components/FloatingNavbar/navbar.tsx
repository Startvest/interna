import styles from './navbar.module.css';
import {useRouter} from 'next/router';
import {
     IoAlbums,
     IoSearch,
     IoMailUnread,
     IoNotifications,
     IoSettings,
     IoAlbumsOutline,
     IoSearchOutline,
     IoNotificationsOutline,
     IoMailOutline,
     IoMailUnreadOutline,
     IoSettingsOutline
   } from 'react-icons/io5';
import Link from 'next/link';

type pathNames = '/feed' | '/search' |'/notifications' | '/messages' | '/settings'

export function NavBar(){
     const router = useRouter();
     // console.log(router.pathname);

     const path:pathNames = router.pathname as pathNames

     let albumsIcon = path === '/feed' ? <IoAlbums size={30} className={styles.icon}/> : <IoAlbumsOutline size={30} className={styles.icon}/>
     let searchIcon = path === '/search' ? <IoSearch size={30} className={styles.icon}/> : <IoSearchOutline size={30} className={styles.icon}/>
     let notificationsIcon = path === '/notifications' ? <IoNotifications size={30} className={styles.icon}/> : <IoNotificationsOutline size={30} className={styles.icon}/>
     let mailIcon = path === '/messages' ? <IoMailUnread size={30} className={styles.icon}/> : <IoMailUnreadOutline size={30} className={styles.icon}/>
     let settingsIcon = path === '/settings' ? <IoSettings size={30} className={styles.icon}/> : <IoSettingsOutline size={30} className={styles.icon}/>
     
     return(
          <div className={styles.container}>
               <Link href={'/feed'}>{ albumsIcon }</Link>
               <Link href={'/search'}>{ searchIcon }</Link>
               <Link href={'/notifications'}>{ notificationsIcon }</Link>
               <Link href={'/messages'}>{ mailIcon }</Link>
               <Link href={'/settings'}>{ settingsIcon }</Link>
          </div>
     )
}
