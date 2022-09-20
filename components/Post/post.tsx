import { Avatar } from '../Avatar';
import DisplayDate from '../DisplayDate';
import { MdFavoriteBorder, MdFavorite, MdShare, MdSend, MdComment } from 'react-icons/md';
import styles from './post.module.scss';

interface Comment {
    _id: string,
    author: string,
    content: string,
}

interface Post extends Comment {
    image: string,
    createdAt: string,
    comments: Comment[]
}

type PostProps = {
    image: string,
    createdAt: string,
    content: string
}

export const Post: React.FC<PostProps> = (props) => {
    const {  content, createdAt, image } = props;
    
    return(
        <div className={styles.post}>
            <div className={styles.userInfo}>
                <Avatar src='/assets/user.png' />

                <div>
                    <span>
                        <h3>John Faruk</h3>
                        <DisplayDate date={createdAt} show={'ago'}/>
                    </span>
                    <p>Intern at Google</p>
                </div>
            </div>

            <div className={styles.postContent}>
                { content }
            </div>

            <div className={styles.imageHolder}>
                <img src={image} alt={`a post`}/>
            </div>

            <div className={styles.postActions}>
                <MdFavoriteBorder size={25}/>
                <MdComment size={25}/>
                <MdSend size={25}/>
                <MdShare size={25}/>
            </div>
        </div>
    )
}