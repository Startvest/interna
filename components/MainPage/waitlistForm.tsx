import styles from '../../styles/waitlist.module.scss';
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import Image from "next/image";

type FormProps = {
    setHasSubmitted: (val:boolean) => void,
    hasSubmittedForm: boolean,
    submitCount: number,
    setSubmitCount: (count:number) => void,
    setModal: () => void
 }
 
export const WaitlistForm: React.FC<FormProps> = ({ setHasSubmitted, hasSubmittedForm, submitCount, setSubmitCount, setModal }) => {
    const { getValues, setValue, handleSubmit } = useForm({
         defaultValues: {
             name: '',
             email: '',
             position: {
                type: 'intern',
                company_name: ''
             }
         }
     });
 
     function submitForm(){
         console.log(getValues())
         setHasSubmitted(true)
     }
 
     return(
        <>
        {!hasSubmittedForm && 
         <form className={styles.waitlistForm} onSubmit={handleSubmit(submitForm)}>
             <div className={styles.formHeading}>
                 <h2>
                     Join our <span className={styles.important}>waitlist!</span>
                 </h2>
                 <p>
                     By joining you are one of the very first people to try our 
                     product when it launches!
                 </p>
             </div>
             
             <Input 
                 onChange={(e:any) => setValue("name", e.target.value)}
                 labelName="Enter your full name"
                 name="name" 
                 placeholder="eg. John Doe" 
                 inputClassName={styles.waitlistInput}
             />
 
             <Input 
                 onChange={(e:any) => setValue("email", e.target.value)}
                 labelName="Enter your email address"
                 name="email" 
                 placeholder="eg. example@abc.com"
                 inputClassName={styles.waitlistInput}
             />
             
             <div className={styles.customInputGroup}>
                <label htmlFor={'position'} className={styles.inputLabel}>
                    Enter your school/place of work
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
                 Join!
             </button>

         </form>
        }

        {hasSubmittedForm  && submitCount < 1 && <> 
            <div className={styles.formHeader}>
                <h2>
                    You are <span className={styles.important}>in!</span> 
                </h2>
            </div>

            <div className={styles.gifHolder}>
                <Image className={styles.gif} src="/minions.gif" layout="fill" alt="minions excited"/>
            </div>

            <p>
                You will definetely be the first to get an email
                from us when we first launch!! 🚀
            </p>

            <button className={styles.dismissButton} onClick={() =>{
                setModal()
                setSubmitCount(submitCount+1)
            }}>
                Dismiss
            </button>
        </>
        }

        {hasSubmittedForm  && submitCount >= 1 && <>
              <div className={styles.formHeader}>
                    <h2>
                        You are <span className={styles.important}>already</span> in!
                    </h2>
                </div>

                <div className={styles.gifHolder}>
                    <Image className={styles.gif} src="/assets/sassy.gif" layout="fill" alt="minions excited"/>
                </div>
                
                <h4>We know you are exicited, we are too!</h4>
                <p>
                    You will definetely be the first to get an email
                    from us when we first launch!! 🚀
                </p>

                <button className={styles.dismissButton} onClick={() =>{
                    setModal()
                }}>
                Dismiss
            </button>
        </>}
         </>
     )
 }