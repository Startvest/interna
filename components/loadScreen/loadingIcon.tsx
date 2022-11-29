import styles from './loading.module.scss';
import { useTheme } from 'next-themes';
import {useEffect, useState} from 'react';


export function LoadingIcon(){
     const { resolvedTheme, setTheme } = useTheme();
     const [mounted, setMounted] = useState(false);
     useEffect(() => {
          setMounted(true);
     },[])
     if (!mounted) return null;

     const color = resolvedTheme == "light" ? "#21295C":"ffffff";
     return(
          <div className={styles.loadIcon}>
               <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5645 2.39219C24.5645 0.991822 23.4131 -0.149541 22.0225 0.016004C9.61897 1.49265 0 12.0791 0 24.9194C0 38.7704 11.1929 49.9988 25 49.9988C38.8071 49.9988 50 38.7704 50 24.9194C50 23.8854 49.9376 22.8661 49.8165 21.8649C49.6774 20.7159 48.6674 19.9014 47.51 19.9014V19.9014C45.9236 19.9014 44.7658 21.401 44.9114 22.9807C44.9678 23.5929 44.9967 24.2131 44.9967 24.84C44.9967 35.8857 36.0431 44.84 24.9983 44.84C13.9536 44.84 5 35.8857 5 24.84C5 14.7716 12.4392 6.44091 22.1205 5.04554C23.4694 4.85113 24.5645 3.75498 24.5645 2.39219V2.39219Z" fill={color}/>
               </svg>
          </div>
     )
}