import styles from './loading.module.css';
import Image from 'next/image';
import {
     IoSunnyOutline
} from 'react-icons/io5';
import {ThemeIcon} from '../ThemeIcon';

export function LoadingScreen(){
     return(
          <div className={styles.main}>
               <ThemeIcon/>
               <div>
                    <Image  className={styles.logo} src={'/icons/icon-512x512.png'} layout='responsive' width='100%' height='100%%'/>
                    <span className={`${styles.text} ${styles.adminFont}`}>Interna</span>
               </div>
          </div>
     )
}