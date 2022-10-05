import { IComment } from '../../services/enums/types';
import styles from './comment.module.scss';
import {Avatar} from '../Avatar';

export const NewComment = ({}) => {
     
  return (
    <div className={styles.commentList}>
      <div className={styles.container}>
        <Avatar src={"/assets/images/user2.png"} size="small" />

        <div className={styles.commentBox}>
          <input type="text" placeholder="Post a comment.."/>
        </div>
      </div>
      <div className={styles.buttonContainer}>
          <button>Post</button>
     </div>
    </div>
  );
};
