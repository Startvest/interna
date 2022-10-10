import {IPost, IComment} from '../../services/enums/types';
import {Comment, NewComment} from './';
import styles from './comment.module.scss';
import {useState} from 'react'

export const CommentList = ({ comments, likeComment}: { comments: IComment[], likeComment: Function}) => {
     const [comment, setComments] = useState(comments);
     const addComment=(data: IComment)=>{
          setComments([data, ...comment]);
     }
     return(
          <div className={styles.commentList}>
                <NewComment addComment={addComment}/>
               {comment && comment.length > 0 && comment.map(comment =>
                    <Comment key={comment._id} comment={comment} likeComment={likeComment}/>
               )}
          </div>
     )
}