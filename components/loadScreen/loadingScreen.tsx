import {useEffect, useState} from 'react';
import styles from './loading.module.css';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import {ProgressBar} from '../progressBar';

import {ThemeIcon} from '../ThemeIcon';

export function LoadingScreen(){
     const { resolvedTheme, setTheme } = useTheme();
     const [mounted, setMounted] = useState(false);
     const [progress, setProgress] = useState<number>(0);
     
     useEffect(() => {
          setMounted(true);
          setInterval(() => {
               if(progress <= 100){
               setProgress(progress + 10)
          }
          }, 1000);
     },[])
     
     if (!mounted) return null;
     return(
          <div className={styles.main}>
               <ThemeIcon/>
               <div className={styles.cont}>
                    <Image  className={styles.logo} src={'/icons/icon-512x512.png'}  width='100' height='100'/>
                    <div className={`${styles.text} ${styles.adminFont}`}>Interna</div>
                    <ProgressBar completed={progress}/>
               </div>

               <div className={styles.footer}>
                    <p>by</p>
                    <div><Image className={styles.startvest} src={resolvedTheme=== 'light'? '/assets/startvest.png' : '/assets/startvestalt.png'}  width='80' height='13'/></div>
               </div>
          </div>
     )
}