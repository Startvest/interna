import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Header } from '../components/header';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Interna!</a>
        </h1>
      </main>
    </div>
  );
};

export default Home;
