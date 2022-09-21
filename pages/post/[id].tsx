import { useRouter } from "next/router";
import styles from '../../components/Post/post.module.scss';
import { Avatar } from "../../components/Avatar";
import { Toolbar } from "../../components/Toolbar";
import DisplayDate from "../../components/DisplayDate";
import { useEffect, useState } from "react";
import { post } from '../../services/enums/post';
import { MdComment, MdFavoriteBorder, MdSend, MdShare, MdChevronLeft, MdDragIndicator } from "react-icons/md";


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

export const PostDetail: React.FC = () => {

    const { id } = useRouter().query;
    const [currentPost, setPost] = useState<Post>();
    const router = useRouter()

    const sharePost = () => {
        if(!currentPost) return
        navigator.share({
            title: `Check out this post by ${currentPost.author}`,
            text: currentPost.content,
            url: `https://getinterna.com/post/${currentPost._id}`
        })
    }
    

    useEffect(() => {
        const curr = post.find(post => post._id === id)
        setPost(curr)
    }, [])
    return(
    <div>
       <Toolbar>
        <MdChevronLeft size={30} onClick={() => router.back()}/>
        <MdDragIndicator size={30}/>
       </Toolbar>
        <div className={styles.userInfo}>
            <Avatar src='/assets/user.png' />

            <div>
                <span>
                    <h3>John Faruk</h3>
                    <DisplayDate date={currentPost?.createdAt} show={'ago'}/>
                </span>
                <p>Intern at Google</p>
            </div>
        </div>

        <div className={styles.postContent}>
            { currentPost?.content }
        </div>

        <div className={styles.imageHolder}>
            <img src={currentPost?.image} alt={`a post`}/>
        </div>

        <div className={styles.postActions}>
            <span>
                <MdFavoriteBorder size={25}/>
                <p>10K</p>
            </span>
            <span>
                <MdComment size={25}/>
                <p>2K</p>
            </span>
            <span>
                <MdSend size={25}/>
                <p>Send</p>
            </span>
            <span onClick={sharePost}>
                <MdShare size={25}/>
                <p>Share</p>
            </span>
        </div>
        <div className={styles.comments}>
            <span>
                Comments
            </span>
            {
                currentPost?.comments.map(comment => (
                <div key={comment._id} className={styles.comment}>
                    { comment.content }
                </div>
                ))
            }

        </div>
    </div>

    )
}

export default PostDetail;