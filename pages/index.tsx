import {useState, useEffect} from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Header } from '../components/header';
import { LandingPage } from '../components/MainPage';
import Script from 'next/script'
import {LoadingScreen} from '../components/loadScreen';
import showNotification from '../public/client';
import { useRouter } from 'next/router';
const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isWailist, setIsWaitlist] = useState<boolean>(true);

  const router = useRouter();
  
    useEffect(() => {
      setTimeout(() => {
        //router.push('/login')
        setLoading(false)
      }, 3000);
  },[]);

  return (
    <div>
      <Header />
      {loading && <LoadingScreen/>}
      {!loading && 
      // TODO: Fortune import the waitlist component here 
        <LandingPage isWaitlist={!isWailist}/>
      
      } 
      
      {/* Script for push notification  [still testing, do not edit]*/}
      {/* <Script src='/client.js' /> */}
    </div>
  );
};

export default Home;
