import { useState } from 'react';
import { 
     IoEllipse, 
     IoHeart, 
     IoHeartOutline
} from 'react-icons/io5';
import { Avatar } from '../Avatar';
import DisplayDate from '../DisplayDate';
import styles from './comment.module.scss';
import {IPost, IComment} from '../../services/enums/types';

export const Comment = ({ comment, likeComment }: { comment: IComment, likeComment: Function}) => {
const { _id, author, content, createdAt, likes} = comment;
const [liked, setLiked] = useState(likes.includes("12d999hj"));
const [noLikes, setNoLikes] = useState(likes.length);

let heartIcon = (liked) ? <IoHeart size={20}/> : <IoHeartOutline size={20} />;
const handleLike = () => {
  likeComment(_id);
  setLiked(!liked);
  liked ? setNoLikes(noLikes-1): setNoLikes(noLikes+1);
} 
  return (
    <div className={styles.container}>
      <Avatar src={author.image} size="small" />

      <div className={styles.commentBox}>
          <div className={styles.userInfo}>
               <span>
                    <h3>{author.name}</h3>
                    <IoEllipse size={5} />
                    <DisplayDate date={createdAt} show={'ago'} />
               </span>
               <p>{author.position}</p>
          </div>

          
          <div className={styles.postContent}>{content}</div>
          <div className={styles.postActions} onClick={() => handleLike()}>
          {heartIcon} {noLikes}
          </div>    
      </div>
    </div>
  );
};
