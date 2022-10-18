import styles from './testimonial.module.scss';
import {Avatar} from '../Avatar';

interface IContent {
     text: string;
     author:{
          name:string;
          icon: string;
          position: string;
     }
}
export const Testimonial = ({content}:{content?: IContent}) =>{
     // const {text, author} = content;
     return(
          <div className={styles.container}>
               <Avatar src={"/assets/images/user2.svg"} size="medium"/>
               <div className={styles.text}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl nisl vestibulum lobortis vestibulum in.</p>
                    <h2>Fortune Alebiosu</h2>
                    <span>Intern at Google</span>
               </div>
               <span className={styles.quote}><img src={"/assets/icons/quote.svg"}/></span>
          </div>
     )
}