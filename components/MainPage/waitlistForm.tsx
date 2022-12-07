import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Input } from "../Input";
import { addUser, getSuggestions } from "../../services/waitlist";
import styles from '../../styles/waitlist.module.scss';
import { AutocompleteName } from '../AutocompleteName/autocomplete';

type FormProps = {
  setHasSubmitted: (val: boolean) => void;
  hasSubmittedForm: boolean;
  submitCount: number;
  setSubmitCount: (count: number) => void;
  setModal: () => void;
  setError: () => void;
};
interface TError {
  response: {
    status: number;
  };
}

export const WaitlistForm: React.FC<FormProps> = ({
  setHasSubmitted,
  hasSubmittedForm,
  submitCount,
  setSubmitCount,
  setModal,
  setError,
}) => 
{
    const [userExists, setuserExists] = useState<boolean>(false);
    const [launched, setLaunched] = useState<boolean>(true);
    const [suggestions, setSuggestions] = useState<any[]|undefined>(undefined);
    const [query, setQueryText] = useState<string>('');
    const { getValues, setValue, handleSubmit, formState: { errors }, register } = useForm({
        defaultValues: {
        name: '',
        email: '',
        position: {
            type: 'student',
            company_name: '',
        },
        },
    });
    const waitlistMutation = useMutation(addUser, {
        onError(error: TError) {},
    });

    async function submitForm() {
        waitlistMutation.mutateAsync(getValues());
    }
    

    useEffect(() => {
        getSuggestions(query)
        .then((res:any[]) => {
            if(!res || res.length === 0){
                setValue('position.company_name', query);
            } 

            //Once suggestion has been tapped it removes all the previous suggestions
            //Until the user starts typing again
            //May want to refactor this code to make it look cleaner though
            const names = res?.map(item => {
                return item.name
            })
            if(names?.includes(query)){
                return setSuggestions(undefined)
            }

            setSuggestions(res)
        })
    }, [query])


    useEffect(() => {
    if (waitlistMutation.isSuccess) {
        setuserExists(false);
        setHasSubmitted(true);
    }
    if(waitlistMutation.isError){
        if(waitlistMutation.error?.response.status == 400){
            setHasSubmitted(true);
            setuserExists(true);
        } else {
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
                 onChange={(e:any) => {setValue("name", e.target.value); console.log("name")}}
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
                <label id="school-and-work" htmlFor={'position'} className={styles.inputLabel}>
                    School or place of work
                </label>
                <div aria-describedby='school-and-work' className={styles.inputCont}>
                    <select onChange={(e:any) => setValue("position.type", e.target.value)} name="Title" title='Your Title'>
                        <option value="student">Student</option>
                        <option value="intern">Intern</option>
                    </select>
                    <span>at</span>
                    <input 
                        aria-placeholder='The name of the institution you work or study in'
                        value={query} 
                        onChange={(e:any) => setQueryText(e.target.value)} 
                        type={'text'} title={'position'} placeholder={'eg Nile University of Nigeria'}  />
                    <AutocompleteName 
                        suggestions={suggestions} 
                        setSelected={(e) => {
                            setSuggestions(undefined);
                            const companyName = e.currentTarget.title
                            setValue('position.company_name', companyName)
                            setQueryText(companyName); //Changes the Value of the input field as well

                        }}
                        />
                </div>
             </div>
 
             <button disabled={waitlistMutation.isLoading} className={`${styles.waitlistButton} ${(waitlistMutation.isLoading) ? styles.waitlistButtonLoading: ''}`} type="submit">
                {(waitlistMutation.isLoading ? "Loading...": "Join!")}
             </button>

         </form>
        }

      {hasSubmittedForm && !userExists && (
        <>
          <div className={styles.formHeader}>
            <h2>
              You are <span className={styles.important}>in!</span>
            </h2>
          </div>

          <div className={styles.gifHolder}>
            <Image
              className={styles.gif}
              priority
              src="/minions.gif"
              layout="fill"
              alt="minions excited"
            />
          </div>

          <p>
            You will definetely be the first to get an email from us when we
            first <span className="secondary">launch</span>!! 🚀
          </p>

          <button
            className={styles.dismissButton}
            onClick={() => {
              setModal();
              setHasSubmitted(false);
            }}
          >
            Dismiss
          </button>
        </>
      )}

      {hasSubmittedForm && userExists && (
        <>
          <div className={styles.formHeader}>
            <h2>
              You are <span className={styles.important}>already</span> in!
            </h2>
          </div>

          <div className={styles.gifHolder}>
            <Image
              className={styles.gif}
              priority
              src="/assets/sassy.gif"
              layout="fill"
              alt="minions excited"
            />
          </div>

          <h4>We know you are exicited, we are too!</h4>
          <p>
            You will definetely be the first to get an email from us when we
            first launch!! 🚀
          </p>

          <button
            title='Dismiss'
            aria-label='Dismiss Button'
            className={styles.dismissButton}
            onClick={() => {
              setModal();
              setHasSubmitted(false);
            }}
          >
            Dismiss
          </button>
        </>
      )}
    </>
  );
};
