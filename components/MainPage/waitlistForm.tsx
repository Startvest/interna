import styles from '../../styles/waitlist.module.scss';
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import Image from "next/image";
import {getUsers, addUser} from "../../services/waitlist";
import {useMutation} from "react-query";
import {useEffect, useState} from "react";

type FormProps = {
    setHasSubmitted: (val:boolean) => void,
    hasSubmittedForm: boolean,
    submitCount: number,
    setSubmitCount: (count:number) => void,
    setModal: () => void,
    setError: () => void
 }
 interface TError{
    response: {
        status: number
    }
 }

export const WaitlistForm: React.FC<FormProps> = ({ setHasSubmitted, hasSubmittedForm, submitCount, setSubmitCount, setModal, setError }) => {
    const [userExists, setuserExists] = useState<boolean>(false);
    const [launched, setLaunched] = useState<boolean>(false);
    const { getValues, setValue, handleSubmit, formState: { errors }, register } = useForm({
         defaultValues: {
             name: '',
             email: '',
             position: {
                type: 'student',
                company_name: ''
             }
         }
     });
     const waitlistMutation = useMutation(addUser, { 
        onError(error: TError){}
     });
 
     async function submitForm(){
        waitlistMutation.mutateAsync(getValues());
        }

     useEffect(() => {
        if (waitlistMutation.isSuccess) {
            setuserExists(false);
            setHasSubmitted(true);
        }
        if(waitlistMutation.isError){
            if(waitlistMutation.error?.response.status == 400){
                setHasSubmitted(true);
                setuserExists(true);
            }else{
                setError();
            }
        }
      }, [waitlistMutation.isSuccess, waitlistMutation.isError]);
 
     return(
        <>

        {!launched && <>
            <div className={styles.formHeader}>
                <h2>
                    Coming <span className={styles.important}>soon!</span> 
                </h2>
            </div>

            <div className={styles.gifHolder}>
                <Image 
                    priority
                    className={styles.gif} 
                    src="/waiting.gif" 
                    layout="fill" 
                    alt="minions excited"/>
            </div>

            <h4>We are <span className='secondary'>launching</span> the waitlist in a bit &#8987;</h4>

            {/* <button className={styles.dismissButton} onClick={() =>{
                setModal();
            }}>
                Dismiss
            </button> */}
        </>}

        {launched && !hasSubmittedForm && 
         <form className={styles.waitlistForm} onSubmit={handleSubmit(submitForm)}>
             <div className={styles.formHeading}>
                 <h2>
                     Join our <span className={styles.important}>waitlist!</span>
                 </h2>
                 {/* <p>
                     By joining you are one of the very first people to try our 
                     product when we <span className='secondary'>launch</span>!
                 </p> */}
                 <p>
                     Join to be notified when we <span className='secondary'>launch</span>! 
                 </p>
             </div>
             
             <Input 
                 onChange={(e:any) => setValue("name", e.target.value)}
                 labelName="Full name"
                 name="name" 
                 placeholder="eg. John Doe" 
                 inputClassName={styles.waitlistInput}
                 reg={register(`name`, {
                    required: `Full name is required`,
                  })}
                  error={errors.name?.message}
             />
 
             <Input 
                 onChange={(e:any) => setValue("email", e.target.value)}
                 labelName="Email address"
                 name="email" 
                 placeholder="eg. example@abc.com"
                 inputClassName={styles.waitlistInput}
                 reg={register(`email`, {
                    required: `Your email is required`,
                  })}
                  error={errors.email?.message}
             />
             
             <div className={styles.customInputGroup}>
                <label htmlFor={'position'} className={styles.inputLabel}>
                    School or place of work
                </label>
                <div className={styles.inputCont}>
                    <select onChange={(e:any) => setValue("position.type", e.target.value)}>
                        <option value="student">Student</option>
                        <option value="intern">Intern</option>
                    </select>
                    <span>at</span>
                    <input onChange={(e:any) => setValue("position.company_name", e.target.value)} type={'text'} title={'position'} placeholder={'eg Nile University of Nigeria'}  />
                </div>
             </div>
 
             <button className={styles.waitlistButton} type="submit">
                {(waitlistMutation.isLoading ? "Loading...": "Join!")}
             </button>

         </form>
        }

        {launched && hasSubmittedForm  && !userExists && <> 
            <div className={styles.formHeader}>
                <h2>
                    You are <span className={styles.important}>in!</span> 
                </h2>
            </div>

            <div className={styles.gifHolder}>
                <Image className={styles.gif} priority src="/minions.gif" layout="fill" alt="minions excited"/>
            </div>

            <p>
                You will definetely be the first to get an email
                from us when we first <span className='secondary'>launch</span>!! 🚀
            </p>

            <button className={styles.dismissButton} onClick={() =>{
                setModal()
                setHasSubmitted(false);
            }}>
                Dismiss
            </button>
        </>
        }

        {launched && hasSubmittedForm && userExists && <>
              <div className={styles.formHeader}>
                    <h2>
                        You are <span className={styles.important}>already</span> in!
                    </h2>
                </div>

                <div className={styles.gifHolder}>
                    <Image className={styles.gif} priority src="/assets/sassy.gif" layout="fill" alt="minions excited"/>
                </div>
                
                <h4>We know you are exicited, we are too!</h4>
                <p>
                    You will definetely be the first to get an email
                    from us when we first launch!! 🚀
                </p>

                <button className={styles.dismissButton} onClick={() =>{
                    setModal()
                    setHasSubmitted(false);
                }}>
                Dismiss
            </button>
        </>}
         </>
     )
 }