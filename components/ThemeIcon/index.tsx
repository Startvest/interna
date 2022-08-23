import { useTheme } from 'next-themes';
import {
     IoSunnyOutline,
     IoMoonOutline
} from 'react-icons/io5';
import styles from './themeIcon.module.css';

export function ThemeIcon(){
     const { resolvedTheme, setTheme } = useTheme();

     const handleTheme = () => {
          setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
        };
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