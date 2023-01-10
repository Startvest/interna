import {IPost, IComment, ICreateComment} from '../../server/db/Feed';
import {Comment, NewComment} from './';
import styles from './comment.module.scss';
import {useState} from 'react'

export const CommentList = ({addComment, comments, likeComment}: {addComment:(data: ICreateComment)=>void, comments: IComment[], likeComment: Function}) => {
     // const [comment, setComments] = useState(comments);
     // const addComment=(data: IComment)=>{
     //      setComments([data, ...comment]);
     // }
     console.log(comments);
     // console.log(comments.length);
     return(
          <div className={styles.commentList}>
                <NewComment addComment={addComment}/>
               {comments && comments.length > 0 && comments.map(comment =>
                    <Comment key={comment._id?.toString()} comment={comment} likeComment={likeComment}/>
               )}
          </div>
     )
}