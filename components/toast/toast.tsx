import styles from './toast.module.css';
import { Itoast } from './toastList';
import {useEffect, useState} from 'react';
import {
  IoAlertCircleOutline,
  IoWarningOutline,
  IoInformationCircleOutline,
  IoCheckmarkCircleOutline,
} from 'react-icons/io5';

const icon = (type: 'success' | 'error' | 'warning' | 'info' | 'primary') => {
  switch (type) {
    case 'success':
      return <IoCheckmarkCircleOutline size={20} className={styles.icon} />;
    case 'error':
      return <IoAlertCircleOutline size={20} className={styles.icon} />;
    case 'warning':
      return <IoWarningOutline size={20} className={styles.icon} />;
    case 'info':
      return <IoInformationCircleOutline size={20} className={styles.icon} />;
    case 'primary':
      return '';
  }
};
export function Toast({ data, setToast, position = 'top-right' }: { data: Itoast, setToast: Function, position?: 'top-right' | 'bottom'  }) {
  const [remove, setRemove] = useState(false);

  useEffect(() =>{
    setTimeout(() => {
      setRemove(true);
    },3000);
   
    setTimeout(() => { 
      setToast(false);

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 4000);
  },[])
  return (
    <div
      className={`${styles.container} ${styles[position]} ${styles.notification} ${styles[data.type]}  ${remove ? styles[`${position}-remove`] : ''}`}
    >
      <div className={`${styles.body}`}>
        <span>{icon(data.type)}</span>
        <p> {data.message}</p>
      </div>
    </div>
  );
}
