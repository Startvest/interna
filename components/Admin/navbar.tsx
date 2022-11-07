import styles from './admin.module.scss';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { 
     IoTrendingUpOutline,
     IoFlagOutline,
     IoFlag,
     IoDocumentText,
     IoDocumentTextOutline,
     IoSettingsOutline,
     IoLogOutOutline,
     IoPeopleOutline,
     IoPeople
} from 'react-icons/io5';

type pathNames = '/admin/dashboard1101' | '/admin/moderation' | '/admin/logs' | '/admin/settings' | '/admin/users1101';


export function NavigationBar(){
     const router = useRouter();
     const path:pathNames = router.pathname as pathNames
     const { setTheme } = useTheme();
     useEffect(() =>{
          setTheme('light');
     },[])
     
     let dashIcon= path === '/admin/dashboard1101' ? <IoTrendingUpOutline size={16} className={`${styles.navItemsLogo} ${styles.navItemsLogoActive}`}/> : <IoTrendingUpOutline size={16} className={styles.navItemsLogo}/>
     let usersIcon = path === '/admin/users1101' ? <IoPeople size={16} className={`${styles.navItemsLogo} ${styles.navItemsLogoActive}`}/> : <IoPeopleOutline size={16} className={styles.navItemsLogo}/>
     let flagIcon= path === '/admin/moderation' ? <IoFlag size={16} className={`${styles.navItemsLogo} ${styles.navItemsLogoActive}`}/> : <IoFlagOutline size={16} className={styles.navItemsLogo}/>
     let docsIcon= path === '/admin/logs' ? <IoDocumentText size={16} className={`${styles.navItemsLogo} ${styles.navItemsLogoActive}`}/> : <IoDocumentTextOutline size={16} className={styles.navItemsLogo}/>
     let settingsIcon= path === '/admin/settings' ? <IoSettingsOutline size={16} className={`${styles.navItemsLogo} ${styles.navItemsLogoActive}`}/> : <IoSettingsOutline size={16} className={styles.navItemsLogo}/>

     return(
          <div className={styles.navbar}>
               <div className={styles.logoContainer}><Image src="/assets/logo-white.svg" className={styles.logo} height={'50px'} width={'222px'}/></div>
               <h3>Admin Panel</h3>
               <div className={styles.navItems}>
                    <Link href={'/admin/dashboard1101'}><span>{dashIcon} User Analytics</span></Link>
                    <Link href={'/admin/users1101'}><span>{usersIcon} Users</span></Link>
                    <Link href={'/admin/moderation'}><span>{flagIcon} Moderation</span></Link>
                    <Link href={'/admin/logs'}><span>{docsIcon} Logs</span></Link>
                    <Link href={'/admin/settings'}><span>{settingsIcon} Settings</span></Link>
               </div>

               <div className={styles.logOut}>
                    <IoLogOutOutline size={20} className={styles.navItemsLogo}/> Log out
               </div>
          </div>
     )
}