import styles from './login.module.scss';
import {Input, Select} from '../../components/Input';
import { useEffect, useState } from 'react';
import { UseFormRegister, UseFormSetValue, useForm } from 'react-hook-form';
import { CompleteSignup, Resume } from '../../types';
import { Button } from '../Button';

interface ResumeFormProps {
    formRegister: UseFormRegister<CompleteSignup>,
    setFormValue: UseFormSetValue<CompleteSignup>
}

type Postion = 'intern'|'student';

export const ResumeForm: React.FC<ResumeFormProps> = ({ setFormValue, formRegister }) =>{

    const [checked, setChecked] = useState<boolean>(false);
    const [experiences, setExperiences] = useState<Resume[]>([]);

    const { register, getValues, reset, setValue, formState } = useForm<Resume>({
        defaultValues: {
            company_name: "",
            position: "intern",
            start_date: "",
            end_date: ""
        }
    })

    const addWorkToResume = () => {
        const workExperience = getValues();
        checked ? workExperience.end_date = 'present' : workExperience.end_date;
        const { company_name, start_date, end_date } = workExperience;
        
        if(!company_name || !start_date || !end_date) return;

        setExperiences((prev) => ([...prev, workExperience]));
        reset()
        setChecked(false)
    }

    useEffect(() => {
        setFormValue('resume', experiences)
    }, [experiences])
    
    return(
          <section className={styles.formContainer}>
            {
                experiences && (
                    experiences.map(val => (
                        <h3>{val.company_name}</h3>
                    ))
                )
            }
               <h2>Resume</h2>
               <Input
                    type="text"
                    name="company_name"
                    onChange={(e: any) => console.log(e.target.value)}
                    placeholder="Enter the company's name"
                    labelName={'Company Name'}
                    className={styles.input}
                    reg={register('company_name', {required: true})}
               />

               <Select
                    name="position"
                    onChange={(e) => {
                        const value = e.target.value as Postion;
                        setValue('position', value)
                    }}
                    placeholder="Were you a student or an Intern"
                    labelName={'Postion'}
                    className={styles.input}
                >
                    <option title='Intern' value="intern">Intern</option>
                    <option title="Student" value="student">Student</option>
                </Select>

                <div className="flex gap">
                    <Input
                        type="date"
                        name="start_date"
                        onChange={(e: any) => console.log(e.target.value)}
                        placeholder="www.portfolio.com"
                        labelName={'Start Date'}
                        className={styles.smallInput}
                        reg={register('start_date', {required: true})}
                    />

                    <Input
                        type="date"
                        name="end_date"
                        onChange={(e: any) => console.log(e.target.value)}
                        placeholder="www.portfolio.com"
                        labelName={'End Date'}
                        className={styles.smallInput}
                        isDisabled={checked}
                        reg={register('end_date', {required: true})}
                    />

                </div>
                <div className={`${styles.present} flex items-center justify-start`}>
                    <input checked={checked} onChange={(e) => setChecked(e.target.checked)} type="checkbox" name="present" id="present"/>
                    <label htmlFor="present">I currently work here</label>
                </div>
                {/* <Button type='button' onClick={addWorkToResume}>
                    Add
                </Button> */}
          </section>
     )
}