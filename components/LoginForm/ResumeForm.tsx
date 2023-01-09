import styles from './login.module.scss';
import {Input, Select} from '../../components/Input';
import { useEffect, useState } from 'react';
import { UseFormRegister, UseFormSetValue, useForm } from 'react-hook-form';
import { CompleteSignup, Resume } from '../../types';
import { Button } from '../Button';
import { ICreateProfile } from '../../server/db';
import { AutocompleteName } from '../AutocompleteName/autocomplete';
import { getSuggestions } from "../../services/waitlist";
interface ResumeFormProps {
    formRegister: any,//UseFormRegister<ICreateProfile>,
    setFormValue: any,//UseFormSetValue<ICreateProfile>,
    handleInputSave: Function
}

type Postion = 'intern'|'student';

export const ResumeForm: React.FC<ResumeFormProps> = ({ setFormValue, formRegister, handleInputSave }) =>{
    const [suggestions, setSuggestions] = useState<any[]|undefined>(undefined);
    const [checked, setChecked] = useState<boolean>(false);
    const [experiences, setExperiences] = useState<Resume[]>([]);
    const [query, setQueryText] = useState<string>('');

    const { register, getValues, reset, setValue, formState } = useForm<Resume>({
        defaultValues: {
            company_name: "",
            type: "intern",
            start: "",
            end: "",
            current: checked,
        }
    })

    const addWorkToResume = () => {
        const workExperience = getValues();
        checked ? workExperience.end = 'present' : workExperience.end;
        const { company_name, start, end } = workExperience;
        
        if(!company_name || !start || !end) return;

        setExperiences((prev) => ([...prev, workExperience]));
        reset()
        setChecked(false)
    }

    useEffect(() => {
        setFormValue('position', experiences)
    }, [experiences])

    useEffect(() => {
        getSuggestions(query)
        .then((res:any[]) => {
            if(!res || res.length === 0){
                setValue('company_name', query);
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
    
    return(
          <section className={styles.formContainer}>
            {
                experiences && (
                    experiences.map((val, key) => (
                        <h3 key={key}>{val.company_name}</h3>
                    ))
                )
            }
               <h2>Resume</h2>
               
               <Input
                    type="text"
                    name="company_name"
                    onChange={(e: any) => {handleInputSave(); setQueryText(e.target.value)}}
                    placeholder="Enter the company's name"
                    labelName={'Company Name'}
                    className={styles.input}
                    reg={register('company_name', {required: true})}
               />
               <AutocompleteName 
                    suggestions={suggestions} 
                    setSelected={(e) => {
                        setSuggestions(undefined);
                        const companyName = e.currentTarget.title
                        setValue('company_name', companyName)
                        setQueryText(companyName); //Changes the Value of the input field as well
                    }}/>

               <Select
                    name="position"
                    onChange={(e) => {
                        const value = e.target.value as Postion;
                        setValue('type', value)
                        handleInputSave();
                    }}
                    placeholder="Were you a student or an Intern"
                    labelName={'Postion'}
                    className={styles.input}
                >
                    <option title='Intern' value="intern">Intern</option>
                    <option title="Student" value="student">Student</option>
                </Select>

                <div className="flex gap justify-between">
                    <Input
                        type="date"
                        name="start_date"
                        onChange={(e: any) => handleInputSave()}
                        // placeholder="www.portfolio.com"
                        labelName={'Start Date'}
                        className={styles.smallInput}
                        reg={register('start', {required: true})}
                    />

                    <Input
                        type="date"
                        name="end_date"
                        onChange={(e: any) => handleInputSave()}
                        // placeholder="www.portfolio.com"
                        labelName={'End Date'}
                        className={styles.smallInput}
                        isDisabled={checked}
                        reg={register('end', {required: true})}
                    />

                </div>
                <div className={`${styles.present} flex items-center justify-start`}>
                    <input checked={checked} onChange={(e) => setChecked(e.target.checked)} type="checkbox" name="present" id="present"/>
                    <label htmlFor="present">I currently work here</label>
                </div>
                <Button type='button' onClick={addWorkToResume} className={styles.saveBtn}>
                    Save work experience
                </Button>
          </section>
     )
}