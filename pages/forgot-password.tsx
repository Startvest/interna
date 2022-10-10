import type { NextPage } from 'next';
import { Header } from '../components/header';
import { Form } from '../components/LoginForm';
import styles from '../components/LoginForm/login.module.scss';
import { ThemeIcon } from '../components/ThemeIcon';

const forgotPassword: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header pageName="Forgot password" head />
      <ThemeIcon />
      <img
        className={styles.headImage}
        src="/assets/illustrations/forgotpassword.svg"
        alt="forgot password icon"
      />
      <h1 className={styles.header}>Forgot Password?</h1>

      <div className={styles.subtext}>
        We have all been there. Enter the email associated with the account and
        we will cover the rest
      </div>

      <Form type="forgot" />
    </div>
  );
};

export default forgotPassword;
