import {useRef, useState} from 'react';
import styles from '../components/LoginForm/login.module.scss';
import {Input} from '../../components/Input';

export const WorkExperienceForm = () =>{
     return(
          <>
               <Input
               type="select"
               name="interest"
               onChange={(e: any) => console.log(e.target.value)}
               placeholder="Enter your fields of specialiazation"
               labelName={'Area of Interests'}
               />

               <Input
               type="text"
               name="location"
               onChange={(e: any) => console.log(e.target.value)}
               placeholder="Enter your location"
               labelName={'Location'}
               />

               <Input
               type="text"
               name="school"
               onChange={(e: any) => console.log(e.target.value)}
               placeholder="Enter the name of your school"
               labelName={'School Name'}
               />

               <Input
               type="text"
               name="employment"
               onChange={(e: any) => console.log(e.target.value)}
               placeholder="Current place of employment"
               labelName={'Company name'}
               />
          </>
     )
}