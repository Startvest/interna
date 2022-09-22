import { Avatar } from '../Avatar';
import { useState } from 'react';
import DisplayDate from '../DisplayDate';
import { MdFavoriteBorder, MdFavorite, MdShare, MdSend, MdComment } from 'react-icons/md';
import {
    IoHeart,
    IoHeartOutline,
    IoChatboxEllipsesOutline,
    IoSendOutline,
    IoShareSocialOutline,
    IoEllipse
} from 'react-icons/io5';
import styles from './post.module.scss';
import { useRouter } from 'next/router';


type PostProps = {
    image: string,
    createdAt: string,
    content: string,
    author: string,
    _id: string,
}

export const Post: React.FC<PostProps> = (props) => {
    const { _id, author, content, createdAt, image } = props;
    const [showMore, setShowText] = useState(false);
    const router = useRouter()

    const sharePost = () => {
        navigator.share({
            title: `Check out this post by ${author}`,
            text: content,
            url: `https://getinterna.com/post/${_id}`
        })
    }
    
    return(
        <div className={styles.post}>
            <div className={styles.userInfo}>
                <Avatar size='small' src='/assets/images/user.png' />

                <div>
                    <span>
                        <h3>John Faruk</h3>
                        <IoEllipse size={5}/>
                        <DisplayDate date={createdAt} show={'ago'}/>
                    </span>
                    <p>Intern at Google</p>
                </div>
            </div>

            <div className={styles.postContent}>
                { showMore ? content : content.substring(0, 70)+"..." }
                <span className={styles.showMoreBtn} onClick={() => setShowText(!showMore)}>
                    { showMore ? ' see less' : 'see more' }
                </span>
            </div>

            <div className={styles.imageHolder} onClick={() => router.push(`/post/${_id}`)}>
                <img src={image} alt={`a post`}/>
            </div>

            <div className={styles.postActions}>
                <span>
                    <IoHeartOutline size={20}/>
                    <p>10K</p>
                </span>
                <span>
                    <IoChatboxEllipsesOutline size={20}/>
                    <p>2K</p>
                </span>
                <span>
                    <IoSendOutline size={20}/>
                    <p>Send</p>
                </span>
                <span onClick={sharePost}>
                    <IoShareSocialOutline size={20} className={styles.icon}/>
                    <p>Share</p>
                </span>
            </div>
        </div>
    )
}