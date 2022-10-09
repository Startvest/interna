import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Header } from '../components/header';
import { Form } from '../components/LoginForm';
import styles from '../components/LoginForm/login.module.scss';
import { ThemeIcon } from '../components/ThemeIcon';

const Signup: NextPage = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className={styles.container}>
      <Header pageName="Sign up to use interna" head />
      <ThemeIcon />
      <img
        className={styles.headImage}
        src={
          resolvedTheme == 'light'
            ? '/assets/illustrations/welcome.svg'
            : '/assets/illustrations/welcomeDark.svg'
        }
        alt="signup icon"
      />
      <h1 className={styles.header}>Welcome to Interna!</h1>

      <Form type="signup" />
    </div>
  );
};

export default Signup;
