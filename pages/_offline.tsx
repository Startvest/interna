import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Button } from '../components/Button';
import { AppHeader } from '../components/header';

import styles from '../styles/offline.module.scss';

const Offline: NextPage = () => {
  const { resolvedTheme } = useTheme();
  return (
    <>
      <AppHeader pageName='You are Offline'/>
      <main className={styles.mainContent}>
        {
          resolvedTheme == 'light' ?
          <Image 
            src="/assets/no-signal.svg" 
            width={'256px'} height={'256px'}
            layout={'fixed'} 
            alt="no signal" title="no signal"
          />
          : resolvedTheme == 'dark' ?
          <Image 
            src="/assets/no-signal-dark.svg" 
            width={'256px'} height={'256px'}
            layout={'fixed'} 
            alt="no signal" title="no signal"
          />
          : null
        }

        <h3>Seems you are offline</h3>

        <p>Please check your internet connection and refresh this page</p>

        <Button className={`${styles.mainButton} flex items-center justify-center`}>
          Back to Homepage
        </Button>
      </main>
      
    </>
  );
};
export default Offline;
