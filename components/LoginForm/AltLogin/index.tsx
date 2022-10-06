import {
  IoLogoGoogle,
  IoLogoLinkedin,
  IoLogoMicrosoft,
  IoLogoTwitter,
} from 'react-icons/io5';
import styles from './altlogin.module.css';

export const AltLogin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <IoLogoGoogle className={styles.icon} />
      </div>
      <div className={styles.box}>
        <IoLogoTwitter className={styles.icon} />
      </div>
      <div className={styles.box}>
        <IoLogoLinkedin className={styles.icon} />
      </div>
      <div className={styles.box}>
        <IoLogoMicrosoft className={styles.icon} />
      </div>
    </div>
  );
};
