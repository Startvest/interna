import {useState} from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Header } from '../components/header';
import Script from 'next/script'
import {LoadingScreen} from '../components/loadScreen';

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div>
      <Header />
      <LoadingScreen/>
      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Interna!</a>
        </h1>
      </main> */}
      {/* Script for push notification  [still testing]*/}
      <Script src='/client.js' />
    </div>
  );
};

export default Home;
