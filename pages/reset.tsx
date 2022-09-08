import type { NextPage } from 'next';
import { Header } from '../components/header';
import { Form } from '../components/LoginForm';
import styles from '../components/LoginForm/login.module.css';
import {ThemeIcon} from '../components/ThemeIcon';

const Reset: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header pageName="Reset Password | Interna" />
      <ThemeIcon/>
      <img
        className={styles.headImage}
        src="/assets/illustrations/reset.svg"
        alt="rest icon"
      />
      <h1 className={styles.header}>Enter new Password</h1>

      <div className={styles.subtext}>
      I guess you can put the password you can easily remeber, yet secured. Good Luck!
      </div>

      <Form type="reset" />
    </div>
  );
};

export default Reset;
