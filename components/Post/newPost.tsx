import styles from './post.module.scss';
import {
     IoImageOutline,
     IoVideocamOutline
} from 'react-icons/io5';
export const NewPost = () =>{
     return(
          <div className={styles.post}>
               <input type="text" placeholder="Write a post.."/>
               <div className={styles.newPost}>
                    <div className={styles.newPostIcon}>
                         <span><IoImageOutline size={30}/></span>
                         <span><IoVideocamOutline size={30}/></span>
                    </div>

                    <div className={styles.buttonContainer}>
                         <button>Post</button>
                    </div>
               </div>
          </div>
     )
}
