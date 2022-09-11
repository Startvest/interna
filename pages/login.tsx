import {useEffect, useState} from 'react';
import type { NextPage } from 'next';
import { Header } from '../components/header';
import { Form } from '../components/LoginForm';
import styles from '../components/LoginForm/login.module.css';
import { ThemeIcon } from '../components/ThemeIcon';
import { useTheme } from 'next-themes';

const Login: NextPage = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
       setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className={styles.container}>
      <Header pageName="Login to interna" head />
      <ThemeIcon />
      <img
        className={styles.headImage}
        src={resolvedTheme == 'light' ? '/assets/illustrations/welcome.svg':'/assets/illustrations/welcomeDark.svg' }
        alt="welcome icon"
      />
      <h1 className={styles.header}>Welcome Back!</h1>

      <Form type="login" />
    </div>
  );
};

export default Login;