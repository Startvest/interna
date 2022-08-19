import styles from './toast.module.css';
import { Itoast } from './toastList';
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
export function Toast({ data }: { data: Itoast }) {
  return (
    <div
      className={`${styles.container} ${styles.notification} ${
        styles[data.type]
      } `}
    >
      <div className={`${styles.body}`}>
        {/* <p>{data.title}</p> */}
        {icon(data.type)}
        <p> {data.message}</p>
      </div>
    </div>
  );
}
