import styles from './testimonial.module.scss';
import {Avatar} from '../Avatar';

interface testimonial {
     text: string;
     author:{
          name:string;
          icon: string;
          position: string;
     }
}
export const Testimonial = ({content}:{content: testimonial}) =>{
     const {text, author} = content;
     return(
          <div className={styles.container}>
               <Avatar src={author.icon} size="small"/>
               <div className={styles.text}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl nisl vestibulum lobortis vestibulum in.</p>
                    <h2>{author.name}</h2>
                    <span>{author.position}</span>
               </div>
               <span className={styles.quote}><img src={"/assets/icons/quote.svg"}/></span>
          </div>
     )
}