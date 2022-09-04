import type { NextPage } from 'next';
import { Header } from '../components/header';
import { Form } from '../components/LoginForm';
import styles from '../components/LoginForm/login.module.css';

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header pageName="Forgot password" />
      <img
        className={styles.headImage}
        src="/assets/illustrations/forgotpassword.svg"
      />
      <h1 className={styles.header}>Forgot Password?</h1>

      <div className={styles.subtext}>
      We have all been there. Enter the email associated with the account and we will cover the rest
      </div>

      <Form type="forgot" />
    </div>
  );
};

export default Login;
