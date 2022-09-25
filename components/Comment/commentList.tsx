import {IPost, IComment} from '../../services/enums/types';
import {Comment, NewComment} from './';
import styles from './comment.module.scss';

export const CommentList = ({ comments }: { comments: IComment[] }) => {
     return(
          <div className={styles.commentList}>
                <NewComment/>
               {comments && comments.length > 0 && comments.map(comment =>
                    <Comment key={comment._id} comment={comment}/>
               )}
          </div>
     )
}