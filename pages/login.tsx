import type { NextPage } from 'next';
import { Header } from '../components/header';
import { Form } from '../components/LoginForm';
import styles from '../components/LoginForm/login.module.css';
import { ThemeIcon } from '../components/ThemeIcon';

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header pageName="Login to interna" head />
      <ThemeIcon />
      <img
        className={styles.headImage}
        src="/assets/illustrations/welcome.svg"
        alt="welcome icon"
      />
      <h1 className={styles.header}>Welcome Back!</h1>

      <Form type="login" />
    </div>
  );
};

export default Login;
