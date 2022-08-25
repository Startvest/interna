import {useEffect, useState} from 'react';
import styles from './loading.module.css';
import Image from 'next/image';
import {ProgressBar} from '../progressBar';

import {ThemeIcon} from '../ThemeIcon';

export function LoadingScreen(){
     const [progress, setProgress] = useState(70);
     
     // setInterval(() => {
     //      if(progress <= 100){
     //      setProgress(progress + 30)
     // }else{
     //      clearInterval();
     // }
     // }, 100);
     
     return(
          <div className={styles.main}>
               <ThemeIcon/>
               <div className={styles.cont}>
                    <Image  className={styles.logo} src={'/icons/icon-512x512.png'}  width='100' height='100'/>
                    <div className={`${styles.text} ${styles.adminFont}`}>Interna</div>
                    <ProgressBar completed={progress}/>
               </div>
          </div>
     )
}