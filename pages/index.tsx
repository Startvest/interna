import {useState, useEffect} from 'react';
import { Header } from '../components/header';
import { LandingPage } from '../components/MainPage';
import {LoadingScreen} from '../components/loadScreen';
// import showNotification from '../public/client';
import { useRouter } from 'next/router';
type HomeProps = {
  isMobile: boolean,
}

const Home: React.FC<HomeProps> = ({}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
    useEffect(() => {
      setTimeout(() => {
        //router.push('/login')
        setLoading(false)
      }, 2000);
  },[]);


  return (
    <div>
      <Header pageName='Interna | The official platform for interns'/>
      {loading && <LoadingScreen/>}
      {!loading && 
        <LandingPage isWaitlist={false} />
      } 
      
      {/* Script for push notification  [still testing, do not edit]*/}
      {/* <Script src='/client.js' /> */}

    </div>
  );
};

export default Home;

import { GetServerSideProps } from 'next';
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  return {
    props: {
    }, // will be passed to the page component as props
  };
};