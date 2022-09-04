import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { AltLogin } from './AltLogin';
import styles from './login.module.css';


export function Form({type} : {type: 'login' | 'forgot'}){
    const { register , formState: { errors }} = useForm();

return(
    <div>
        <form className={styles.form}>
          
            {(type == 'login' || "forgot") && <Input 
             type='text'
             name='email'
             onChange={(e:any) => console.log(e.target.value)}
             placeholder='Enter your email address'
             labelName={(type === "forgot") ? "" : "Email"}
             />}
            {/* {errors.email && <span>{errors.email?.message}</span>} */}

            {type == 'login' && <Input 
             type='password'
             name='password'
             onChange={(e:any) => console.log(e.target.value)}
             placeholder='Enter your password'
             labelName="Password"
             />}

             {type == 'login' && <div className={styles.forgot}>
                Forgot password?
             </div>}

             
             {type == 'login' && <button className={styles.btnPrimary}>
                Login
             </button>}

             {type == 'forgot' && <button className={styles.btnPrimary}>
                Submit
             </button>}


             { type == 'login' && <div className={styles.altLoginText}>
                Or Login with
             </div>}

             {type == 'login' && <AltLogin/>}
        </form>
    </div>
)
}