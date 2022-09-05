import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import { AltLogin } from './AltLogin';
import styles from './login.module.css';

export function Form({ type }: { type: 'login' | 'forgot' | 'reset' | 'signup'}) {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div>
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

        {(['login','reset'].indexOf(type) > -1) && (
          <Input
            type="password"
            name="password"
            onChange={(e: any) => console.log(e.target.value)}
            placeholder="Enter your password"
            labelName="Password again"
          />
        )}

        {type == 'login' && (
          <div className={styles.forgot}>Forgot password?</div>
        )}

        {type == 'login' && (
          <button className={styles.btnPrimary}>Login</button>
        )}

        {type == 'signup' && (
          <button className={styles.btnPrimary}>Sign Up</button>
        )}

        {(['reset','forgot'].indexOf(type) > -1) && (
          <button className={styles.btnPrimary}>Submit</button>
        )}

        {(['login', 'signup', ].indexOf(type) > -1) && (
          <div className={styles.altLoginText}>Or Login with</div>
        )}

        {(['login', 'signup', ].indexOf(type) > -1) && <AltLogin />}

        {type == 'login' && (
         <div className={styles.altLoginText}>Do not have an account? Sign up!</div>
        )}

        {type == 'signup' && (
         <div className={styles.altLoginText}>Have an account? Log in!</div>
        )}
      </form>
    </div>
  );
}
