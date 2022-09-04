import styles from './altLogin.module.css';
import {IoLogoGoogle, IoLogoTwitter} from 'react-icons/io5';

export const AltLogin = () =>{
     return(
          <div className={styles.container}>
               <div className={styles.box}><IoLogoGoogle className={styles.icon}/></div>
               <div className={styles.box}><IoLogoTwitter className={styles.icon}/></div>
          </div>
     )
}