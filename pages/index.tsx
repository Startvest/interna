import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getdata } from '../services/getTestData';
import { useMutation } from 'react-query';
import { Toast, Itoast } from '../components/toast';
import { useTheme } from 'next-themes';

const Home: NextPage = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [data, setData] = useState<any>({});
  const [toastData, setToastData] = useState<Itoast>({
    title: '',
    message: '',
    type: 'success',
  });
  const [toast, setToast] = useState<boolean>(false);

  const dataMutation = useMutation(getdata, {
    onSuccess: (data) => {
      setData(data);
      setMounted(true);
    },
    onError: (error) => {
      console.log(error);
      // Notification error component
    },
  });

  useEffect(() => {
    dataMutation.mutate();
  }, []);

  const handletoast = () => {
    setToast(true);
    setToastData({
      title: 'Hello',
      message: 'Hello this is a test',
      type: 'primary',
    });

    setTimeout(() => {
      setToast(false);
    }, 4000);
  };

  const handleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return null;
  return (
    <div className={styles.container}>
      {toast && <Toast data={toastData} />}
      <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <title>
          Connect with interns | Connect with opportunities | Interna
        </title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Interna!</a>
        </h1>

        <h2>Data from Server</h2>
        {dataMutation.isLoading && <div>Loading....</div>}
        {dataMutation.isSuccess && data && (
          <div>
            {data.name}, {data.desc}
          </div>
        )}

        <button onClick={handletoast}>Toast</button>

        <p>
          <button onClick={handleTheme}>
            Set to {resolvedTheme === 'dark' ? 'light' : 'dark'} Mode
          </button>
        </p>
      </main>
    </div>
  );
};

export default Home;

// export async function getServerSideProps() {
//   const serverData = await getdata();

//   return {
//     serverData, // will be passed to the page component as props
//   }
// }
