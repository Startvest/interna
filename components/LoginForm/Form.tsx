import {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import { AltLogin } from './AltLogin';
import styles from './login.module.scss';
import {useRouter} from 'next/router';
import {CodeModal} from '../LoginForm';

export function Form({ type }: { type: 'login' | 'forgot' | 'reset' | 'signup'}) {
   const [codeModal, setCodeModal] = useState(false);

   const handleSignUp = (e:any) =>{
     e.preventDefault();
     setCodeModal(true);
   }
   const handleRoute = ( e: any, route : string) =>{
    e.preventDefault();
    (route) ? router.push(route) : null;
   }
   const {
    register,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  return (
    <div>
      {codeModal && <CodeModal handleModal={() => setCodeModal(!CodeModal)}/>}
      <form className={styles.form}>
        {(['login','forgot','signup'].indexOf(type) > -1) && (
          <Input
            type="text"
            name="email"
            onChange={(e: any) => console.log(e.target.value)}
            placeholder="Enter your email address"
            labelName={type === 'forgot' ? '' : 'Email'}
          />
        )}
        {/* {errors.email && <span>{errors.email?.message}</span>} */}

        {(['login','reset','signup'].indexOf(type) > -1) && (
          <Input
            type="password"
            name="password"
            onChange={(e: any) => console.log(e.target.value)}
            placeholder="Enter your password"
            labelName="Password"
          />
        )}

        {(['signup','reset'].indexOf(type) > -1) && (
          <Input
            type="password"
            name="password"
            onChange={(e: any) => console.log(e.target.value)}
            placeholder="Enter your password"
            labelName="Re-enter Password"
          />
        )}

        {type == 'login' && (
          <div className={styles.forgot} onClick={(e) => handleRoute(e, '/forgot-password')}>Forgot password?</div>
        )}

        {type == 'login' && (
          <button className={styles.btnPrimary} onClick={(e) => handleRoute(e, '/feed')}>Login</button>
        )}

        {type == 'signup' && (
          <button className={styles.btnPrimary} onClick={handleSignUp}>Sign Up</button>
        )}

        {(['reset','forgot'].indexOf(type) > -1) && (
          <button className={styles.btnPrimary} onClick={(e) => {e.preventDefault(); (type === 'forgot') ? router.push('/reset'):router.push('/signup')}}>Submit</button>
        )}

        {(['login', 'signup', ].indexOf(type) > -1) && (
          <div className={styles.altLoginText}>Or Login with</div>
        )}

        {(['login', 'signup', ].indexOf(type) > -1) && <AltLogin />}

        {type == 'login' && (
         <div className={styles.altLoginText}>Do not have an account? <span onClick={(e) => handleRoute(e, '/signup')}>Sign up!</span></div>
        )}

        {type == 'signup' && (
         <div className={styles.altLoginText}>Have an account? <span onClick={(e) => handleRoute(e, '/login')}>Log in!</span></div>
        )}
      </form>
    </div>
  );
}
