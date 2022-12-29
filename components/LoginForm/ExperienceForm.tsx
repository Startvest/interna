import {useRef, useState} from 'react';
import styles from './login.module.scss';
import {Input, TagInput} from '../../components/Input';
import { TagsInput } from 'react-tag-input-component';

export const WorkExperienceForm = () =>{
     return(
          <section className={styles.formContainer}>
               <h2>Experience</h2>
               <Input
                    type="text"
                    name="headline"
                    onChange={(e: any) => console.log(e.target.value)}
                    placeholder="Write a short description of yourself"
                    labelName={'Your headline'}
               />

               <TagsInput
               />

               <Input
                    type="text"
                    name="portfolio"
                    onChange={(e: any) => console.log(e.target.value)}
                    placeholder="www.portfolio.com"
                    labelName={'Link'}
               />
          </section>
     )
}