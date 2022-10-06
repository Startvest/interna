import { IComment } from '../../services/enums/types';
import styles from './comment.module.scss';
import {Avatar} from '../Avatar';
import {useState} from 'react';

export const NewComment = ({addComment}:{addComment:Function}) => {
  const [comment, setComment] = useState("");
  const handleComment = () => {
    const data = {
      _id: `testId${Math.floor(Math.random() * 100)}`,
      author: {
        id: "12d999hj",
        name: "John Taiwo",
        position: "Intern at Google",
        image: "/assets/images/user2.svg",
      },
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
          <button onClick={() => handleComment()}>Post</button>
     </div>
    </div>
  );
};
