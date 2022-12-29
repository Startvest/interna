import styles from './login.module.scss';
import {Input, Select} from '../../components/Input';

export const ResumeForm = () =>{
     return(
          <section className={styles.formContainer}>
               <h2>Resume</h2>
               <Input
                    type="text"
                    name="company_name"
                    onChange={(e: any) => console.log(e.target.value)}
                    placeholder="Write a short description of yourself"
                    labelName={'Company Name'}
               />

               <Select
                    name="position"
                    onChange={(e: any) => console.log(e.target.value)}
                    placeholder="Enter your fields of specialiazation"
                    labelName={'Area of Interests'}
                >
                    <option title='Intern' value="intern">Intern</option>
                    <option title="Student" value="student">Student</option>
                </Select>

                <div className='flex gap'>
                    <Input
                        type="date"
                        name="start_date"
                        onChange={(e: any) => console.log(e.target.value)}
                        placeholder="www.portfolio.com"
                        labelName={'Start Date'}
                    />

                    <Input
                        type="date"
                        name="end_date"
                        onChange={(e: any) => console.log(e.target.value)}
                        placeholder="www.portfolio.com"
                        labelName={'End Date'}
                    />

                </div>
                <div>
                    <input type="checkbox" name="present" id="present"/>
                    <label htmlFor="present">I currently work here</label>
                </div>

          </section>
     )
}