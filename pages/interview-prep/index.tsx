import { useEffect, useState } from 'react';
import { NavBar } from '../../components/FloatingNavbar';
import { AppHeader } from '../../components/header';
import {Button} from '../../components/Button';
import styles from '../../components/InterviewPrep/style.module.scss';
import {Tips, InterviewQuestions} from "../../components/InterviewPrep";

interface FeedProps{
  isMobile: boolean;
}

const InterviewPrep = ({isMobile}: FeedProps) => {
  console.log(isMobile);
  return (
    <>
      <AppHeader pageName={'Interview Preparation | Interna'} />
          <h2 className={styles.headText}>Interview prep</h2>
          <section className={styles.boxes}>
               <InterviewQuestions/>
               <Tips/>
          </section>
          
      <NavBar />
    </>
  );
};

export default InterviewPrep;

import { GetServerSideProps } from 'next';
import { getDevice } from '../../server/getDevice';
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  return {
    props: {
      isMobile: Boolean(getDevice(req))
    }, // will be passed to the page component as props
  };
};
