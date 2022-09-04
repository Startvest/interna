import type { NextPage } from 'next';
import { Header } from '../components/header';
import styles from '../components/LoginForm/login.module.css';
import {Form} from '../components/LoginForm';

const Login : NextPage = () => {
     return(
         <div className={styles.container}>
             <Header pageName='Login to interna'/>
             <img className={styles.headImage} src='/assets/illustrations/welcome.svg'/>
             <h1 className={styles.header}>Welcome Back!</h1>

               <Form type='login'/>             
         </div>
     )
}

export default Login;