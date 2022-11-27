import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { Toast, Itoast } from '../components/toast';
import { useTheme } from 'next-themes';
import { AppHeader } from '../components/header';
import { getdata } from '../services/getTestData';
import { useMutation } from 'react-query';
import {NavBar} from '../components/FloatingNavbar';

const Help: NextPage = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [toastData, setToastData] = useState<Itoast>({
    title: '',
    message: '',
    type: 'success',
  });
  const [toast, setToast] = useState<boolean>(false);

  const [mounted, setMounted] = useState(false);

  const [data, setData] = useState<any>({});

  const dataMutation = useMutation(getdata, {
    onSuccess: (data:any) => {
      setData(data);
      setMounted(true);
    },
    onError: (error:any) => {
      console.log(error);
      // Notification error component
    },
  });

  useEffect(() => {
    dataMutation.mutate();
  }, [data]);

  if (!mounted) return null;
  const handletoast = () => {
    setToast(true);
    setToastData({
      message: 'Hello this is a test',
      type: 'success',
    })
  }

  const handleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  }
  return (<>
    <AppHeader pageName={"Get help | Interna"}/>
    <div className={styles.main}>
      {toast && <Toast data={toastData}  setToast={setToast} position='top-right'/>}
      <NavBar/>
      <h2>Data from Server</h2>
      {/* <div>{dataMutation.isLoading && <div>Loading....</div>}</div> */}
      {/* <div>{dataMutation.isSuccess && data && (
        <p>
          {data.name}, {data.desc}
        </p> 
      )}</div> */}

      <button onClick={handletoast}>Toast</button>

      <p>
        <button onClick={handleTheme}>
          Set to {resolvedTheme === 'dark' ? 'light' : 'dark'} Mode
        </button>
      </p>
    </div>
    </>
  );
};

export default Help;

import { GetServerSideProps } from 'next';
import {addlog} from "../server/db/Logs";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
    // console.log(await addlog("A test error", "pages/help390.tsx", "info"))
  return {
    props: {
    }, // will be passed to the page component as props
  };
};
