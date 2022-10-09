import styles from './refresh.module.scss';
import {
     IoArrowUpOutline,
   } from 'react-icons/io5';


type RefreshIconProps={
     setToast: Function
}
export const RefreshIcon: React.FC<RefreshIconProps> = ({setToast}) => {
     // setToast(false);
     const handleRefresh = () =>{
          scrollTo({
               top: 0,
               behavior: 'smooth'
          });
          
          setToast(false);
     }
     return (
          <div className={styles.container} onClick={() => handleRefresh()}>
             <IoArrowUpOutline size={20} className={styles.icon}/>  <span className={styles.text}>Latest posts</span>
          </div>
     ) 
} 