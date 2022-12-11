import {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import { AltLogin } from './AltLogin';
import styles from './login.module.scss';
import {useRouter} from 'next/router';
import {CodeModal} from '../LoginForm';
import { signIn } from "next-auth/react";
import {useMutation} from "react-query";
import {TError} from '../../services';
import {SigninPasswordUser} from '../../services/authentication';
import {ErrorModal} from '../Modal';

export function Form({ type }: { type: 'login' | 'forgot' | 'reset' | 'signup'}) {
   const [codeModal, setCodeModal] = useState<boolean>(false);
   const [errorModal, setErrorModal] = useState<boolean>(false);
   const [PasswordMessage, setPassMessage] = useState("");
   const [emailMessage, setEmailMessage] = useState("");
   const [validEmail, setValidEmail] = useState(false);
   const [validPasssword, setValidPassword] = useState(false);
   const signupMutation = useMutation(SigninPasswordUser, {
    onError(error: TError) {},
  });

   const handleSignUp = (e:any) =>{
     e.preventDefault();
     signupMutation.mutateAsync({
      email: getValues().email,
      password: getValues().password,
      verified: false
     })
    //  Mutation to sign in a user, and send email to verifiy
   }
   useEffect(() => {
    if (signupMutation.isSuccess) {
        setCodeModal(true);
    }
    if(signupMutation.isError){
        // if(waitlistMutation.error?.response.status == 400){
        //     setHasSubmitted(true);
        // } else {
        //     setErrorModal();
        // }
        setErrorModal(true);
    }
    }, [signupMutation.isSuccess, signupMutation.isError]);

   const handleLogin = async (e:any) =>{
      e.preventDefault();
        await signIn(`credentials`, {
          email: getValues().email,
          password: getValues().password1,
          callbackUrl: "http://localhost:3001/feed"
        });
   }
   const verifyPassword = (str:string) => {
    const rExp: boolean = /((?=.*[a-z])|(?=.*[A-Z]))((?=.*[0-9])|(?=.*\W))/.test(str);
    if (rExp && str.length < 8) {
      setValidPassword(false);
      setPassMessage("Password is too short");
      return;
    }
    if (str !== getValues().password1) {
      setValidPassword(false);
      setPassMessage("Password is not the same");
      return;
    }
    if (rExp) {
      setPassMessage("Excellent!");
      setTimeout(() => setPassMessage(""), 1000);
    } else {
      setPassMessage(
        "Password must contain at least one uppercase letter and numbers or special characters"
      );
    }
    setValidPassword(rExp);
  };

  const verifyEmail = (str:string) => {
    if(str.length < 0) setEmailMessage("");
    const rExp: boolean = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(str);
    if (rExp) {
      setEmailMessage("Excellent!");
      setTimeout(() => setEmailMessage(""), 1000);
    } else {
      setEmailMessage("Not a valid email");
    }
    setValidEmail(rExp);
  };
   const handleRoute = ( e: any, route : string) =>{
    e.preventDefault();
    (route) ? router.push(route) : null;
   }

   const {
    getValues, 
    setValue, 
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password1: '',
      password: ''
      },
  });

  const router = useRouter();

  return (
    <div>
      <ErrorModal isOpen={errorModal} closeModal={() => setErrorModal(!errorModal)}/>
      {codeModal && <CodeModal handleModal={() => setCodeModal(!CodeModal)}/>}
      <form className={styles.form}>
        {(['login', 'signup', ].indexOf(type) > -1) && <AltLogin />}

        {(['login', 'signup', ].indexOf(type) > -1) && (
            <div className={styles.altLoginText}>Or Login with</div>
          )}

        {(['login','forgot','signup'].indexOf(type) > -1) && (
          <Input
            type="text"
            name="email"
            placeholder="Enter your email address"
            labelName={type === 'forgot' ? '' : 'Email'}
            reg={register(`email`, {
              required: `Email is required`,
              onChange: (v) => verifyEmail(v.target.value)
            })}
            error={emailMessage}
          />
        )}
        {/* {!validEmail && <span>{emailMessage}</span>} */}

        {(['login','reset','signup'].indexOf(type) > -1) && (
          <Input
            type="password"
            name="password1"
            onChange={(e: any) => {setValue("password1", e.target.value); setValue("password1", e.target.value)}}
            placeholder="Enter your password"
            labelName="Password"
            reg={register(`password1`, {
              required: `Password is required`,
            })}
          />
        )}

        {(['signup','reset'].indexOf(type) > -1) && (
          <Input
            type="password"
            name="password"
            onChange={(e: any) => {verifyPassword(e.target.value); setValue("password", e.target.value)}}
            placeholder="Enter your password"
            labelName="Re-enter Password"
            reg={register(`password`, {
              required: `Password is required`,
              onChange: (v) => verifyPassword(v.target.value)
            })}
            error={PasswordMessage}
          />
        )}
        {<span>{"Test passowrd: H@nif1001"}</span>}

        {type == 'login' && (
          <div className={styles.forgot} onClick={(e) => handleRoute(e, '/forgot-password')}>Forgot password?</div>
        )}

        {type == 'login' && (
          <button type="submit" className={styles.btnPrimary} disabled={!validEmail} onClick={handleLogin}>Login</button>
        )}

        {type == 'signup' && (
          <button className={styles.btnPrimary} disabled={!validEmail || !validPasssword || signupMutation.isLoading} onClick={handleSignUp}>{(signupMutation.isLoading) ? "...":"Sign Up"}</button>
        )}

        {(['reset','forgot'].indexOf(type) > -1) && (
          <button className={styles.btnPrimary} onClick={(e) => {e.preventDefault(); (type === 'forgot') ? router.push('/reset'):router.push('/signup')}}>Submit</button>
        )}

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
