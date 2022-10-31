import type { NextPage } from 'next';
import { Button } from '../components/Button';
import { AppHeader, Header } from '../components/header';
import { useTheme } from 'next-themes';
import Image from 'next/image';


import styles from '../styles/offline.module.scss';

const Offline: NextPage = () => {

  const { resolvedTheme } = useTheme();

  return (
    <>
      <AppHeader pageName='Something Went Wrong'/>
      <main className={styles.pageContent}>
        {
          resolvedTheme == 'light' ? 
          <Image 
            src="/assets/404.svg" 
            width={'256px'} height={'256px'}
            layout={'fixed'} 
            alt="404" title='404'
          />
          : resolvedTheme == 'dark' ?
          <Image 
            src="/assets/404-dark.svg" 
            alt="404" title='404'
            width={'256px'} height={'256px'}
            layout={'fixed'} 
          />
          : null
        }

        <h3>Oops...something is not right</h3>

        <p>
          Please check the url again, or let us take you back to the home page.
        </p>

        <Button className={`${styles.mainButton} flex items-center justify-center`}>
          Back to Homepage
        </Button>
      </main>
      
    </>
  );
};
export default Offline;
