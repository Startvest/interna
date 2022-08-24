import {useState, useEffect} from 'react';
import { useTheme } from 'next-themes';
import {
     IoSunnyOutline,
     IoMoonOutline
} from 'react-icons/io5';
import styles from './themeIcon.module.css';

export function ThemeIcon(){
     const { resolvedTheme, setTheme } = useTheme();
     const [mounted, setMounted] = useState(false);

     const handleTheme = () => {
          setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
        };

     useEffect(() => {
          setMounted(true);
     }, []);

     if (!mounted) return null;
     return(
          <>
          {(resolvedTheme === 'light') ? 
               <IoMoonOutline size={40} className={styles.icon} onClick={handleTheme}/>
          :
               <IoSunnyOutline size={40} className={styles.icon} onClick={handleTheme}/>
          }
          </>
     )
}