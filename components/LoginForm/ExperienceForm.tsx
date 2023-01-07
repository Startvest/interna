import {useRef, useState} from 'react';
import styles from './login.module.scss';
import {Input, TagInput, Textarea} from '../../components/Input';
import { TagsInput } from 'react-tag-input-component';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { CompleteSignup } from '../../types';
import { ICreateProfile } from '../../server/db';

interface WorkExperienceFormProps {
     formRegister: UseFormRegister<ICreateProfile>,
     setFormValue: UseFormSetValue<ICreateProfile>
}
export const WorkExperienceForm: React.FC<WorkExperienceFormProps> = ({ formRegister, setFormValue }) =>{
     
     return(
          <section className={styles.formContainer}>
               <h2>Experience</h2>
               <Textarea
                    type="text"
                    name="headline"
                    onChange={(e: any) => console.log(e.target.value)}
                    placeholder="Write a short description of yourself"
                    labelName={'Your headline'}
                    reg={formRegister('headline')}
               />

               <TagInput
                    labelName="Skills and Interests"
                    name="skills"
                    onChange={(values) => setFormValue('skills', values)}
               />

               <Input
                    type="text"
                    name="portfolio"
                    onChange={(e: any) => console.log(e.target.value)}
                    placeholder="www.portfolio.com"
                    labelName={'Link'}
                    reg={formRegister('link')}
               />
          </section>
     )
}