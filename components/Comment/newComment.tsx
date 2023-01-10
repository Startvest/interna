import { IComment } from '../../services/enums/types';
import styles from './comment.module.scss';
import {Avatar} from '../Avatar';
import {useState} from 'react';
import { ICreateComment } from '../../server/db/Feed';

export const NewComment = ({addComment}:{addComment:(data: ICreateComment)=>void}) => {
  const [comment, setComment] = useState("");
  const handleComment = () => {
    const data:ICreateComment = {
      authorId: "63b030c13a37647b2079a2ce",
      content: comment,
      createdAt: Date(),
      likes: []
    }
    addComment(data);
    setComment("");
  }
  return (
    <div className={styles.commentList}>
      <div className={styles.container}>
        <Avatar src={"/assets/images/user2.svg"} size="small" />

        <div className={styles.commentBox}>
          <input type="text" placeholder="Post a comment.." value={comment} onChange={(e) => setComment(e.target.value)}/>
        </div>
      </div>
      <div className={styles.buttonContainer}>
          <button onClick={() => handleComment()} disabled={comment.length <= 0}>Post</button>
     </div>
    </div>
  );
};
