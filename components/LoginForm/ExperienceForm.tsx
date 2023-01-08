import {useRef, useState} from 'react';
import styles from './login.module.scss';
import {Input, TagInput, Textarea} from '../../components/Input';
import { TagsInput } from 'react-tag-input-component';
import type { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { CompleteSignup } from '../../types';
import { ICreateProfile } from '../../server/db';

interface WorkExperienceFormProps {
     formRegister: any,//UseFormRegister<ICreateProfile>,
     setFormValue: any,//UseFormSetValue<ICreateProfile>,
     errors: any,
     handleInputSave: Function
}
export const WorkExperienceForm: React.FC<WorkExperienceFormProps> = ({ formRegister, setFormValue,errors, handleInputSave }) =>{
     
     return(
          <section className={styles.formContainer}>
               <h2>Experience</h2>
               <Textarea
                    type="text"
                    name="headline"
                    onChange={(e: any) => handleInputSave()}
                    placeholder="Write a short description of yourself"
                    labelName={'Your headline'}
                    reg={formRegister('headline', {
                         required: "Headline is required",
                         maxLength: 200,
                    })}
                    error={errors.headline?.message}
               />

               <TagInput
                    labelName="Skills and Interests"
                    name="skills"
                    onChange={(values) => {setFormValue('skills', values); handleInputSave()}}
               />

               <Input
                    type="text"
                    name="portfolio"
                    onChange={(e: any) => handleInputSave()}
                    placeholder="www.portfolio.com"
                    labelName={'Portfolio Link'}
                    reg={formRegister('link', {
                         pattern: new RegExp('^((https|http|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(?:[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$')
                    })}
                    error={errors.link?.message}
               />

          </section>
     )
}