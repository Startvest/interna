import styles from './navbar.module.scss';
import {useState} from 'react';
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
     IoSettingsOutline,
     IoLayersOutline,
     IoDocumentsOutline,
     IoColorWand
   } from 'react-icons/io5';
import Link from 'next/link';

type pathNames = '/feed' | '/search' |'/notifications' | '/messages' | '/settings'

export function NavBar(){
     const router = useRouter();
     const [more, setMore] = useState(false);
     // console.log(router.pathname);

     const path:pathNames = router.pathname as pathNames

     let albumsIcon = path === '/feed' ? <IoAlbums size={30} className={styles.icon}/> : <IoAlbumsOutline size={30} className={styles.icon}/>
     let searchIcon = path === '/search' ? <IoSearch size={30} className={styles.icon}/> : <IoSearchOutline size={30} className={styles.icon}/>
     let notificationsIcon = path === '/notifications' ? <IoNotifications size={30} className={styles.icon}/> : <IoNotificationsOutline size={30} className={styles.icon}/>
     let mailIcon = path === '/messages' ? <IoMailUnread size={30} className={styles.icon}/> : <IoMailUnreadOutline size={30} className={styles.icon}/>
     let settingsIcon = path === '/settings' ? <IoSettings size={30} className={styles.icon}/> : <IoSettingsOutline size={20} className={styles.icon}/>
     const handleMore = () =>{
          setMore(!more);
     }
     return(
          <div className={styles.navHolder}>
               {more && 
               <div className={styles.more}>
                    <Link href={'/resume'} ><span ><IoDocumentsOutline size={20} className={styles.icon}/> Resume </span></Link>
                    <Link href={'/interview-prep'}><span><IoColorWand size={20} className={styles.icon}/> Interview Prep</span></Link>
                    <Link href={'/settings'}><span>{ settingsIcon } Settings</span></Link>
               </div>
               }
               <div className={styles.container}>
                    <Link href={'/feed'}>{ albumsIcon }</Link>
                    <Link href={'/search'}>{ searchIcon }</Link>
                    <div onClick={handleMore}><IoLayersOutline size={30} className={styles.icon}/> </div>
                    <Link href={'/messages'}>{ mailIcon }</Link>
                    <Link href={'/notifications'}>{ notificationsIcon }</Link>
                    {/* <Link href={'/settings'}>{ settingsIcon }</Link> */}
               </div>
          </div>
     )
}
