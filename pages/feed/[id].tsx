import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  IoChatboxOutline,
  IoEllipse,
  IoHeart,
  IoHeartOutline,
  IoSendOutline,
  IoShareSocialOutline,
} from 'react-icons/io5';
import { MdChevronLeft } from 'react-icons/md';
import { Avatar } from '../../components/Avatar';
import { CommentList } from '../../components/Comment/commentList';
import DisplayDate from '../../components/DisplayDate';
import styles from '../../components/Post/post.module.scss';
import { Toolbar } from '../../components/Toolbar';
import { post } from '../../services/enums/post';
import { IComment, IPost } from '../../services/enums/types';
import { ShareModal } from '../../components/Modal/ShareModal';
import { AppHeader } from '../../components/header';

type PostProps = {
     isMobile: boolean,
}
export const PostDetail: React.FC<PostProps> = ({isMobile}) => {
  const { id } = useRouter().query;
  const [currentPost, setPost] = useState<IPost>();
  const [liked, setLiked] = useState(currentPost?.likes.includes("12d999hj"));
  const router = useRouter();
  const [shareModal, setShareModal] = useState(false);
  const [noLikes, setNoLikes] = useState(currentPost?.likes.length || 0);
  let heartIcon = liked ? <IoHeart size={25} /> : <IoHeartOutline size={25} />;

  const sharePost = () => {
    if (!currentPost) return;

    (!isMobile) ? 
    setShareModal(true)
    : navigator.share({
     title: `Check out this post by ${currentPost.author}`,
     text: currentPost.content,
     url: `https://getinterna.com/feed/${currentPost._id}`,
   }); 
    
  };

  useEffect(() => {
    const curr = post.find((post) => post._id === id);
    setPost(curr);
  }, []);

  const handleLike = () =>{
    setLiked(!liked);
    (liked) ? setNoLikes(noLikes-1) : setNoLikes(noLikes+1);
  }

  const addComment = (data: IComment) =>{
    console.log(data);
    if(currentPost){
      const post = currentPost; 
      post.comments = [...post.comments, data];
      setPost(post);
    }
  }

  const likeComment = (id:string) =>{
    console.log(`Comment ${id} liked`)
  }
  return (
    <>
    <AppHeader pageName={'Feed | Interna'} />
    {currentPost && shareModal && <ShareModal isOpen={shareModal} closeModal={() => setShareModal(!shareModal)} postId={currentPost._id}/>}
    {!currentPost && (
     <div className={styles.noPost}>
          Sorry, this post does not exist
     </div>
    )}
      {currentPost && (
        <div className={styles.largePost}>
          <Toolbar>
            <MdChevronLeft size={30} onClick={() => router.back()} className={styles.backIcon}/>
            <h4>Post</h4>
          </Toolbar>
          <div className={styles.userInfo}>
            <Avatar src="/assets/images/user.png" size="small" />

            <div>
              <span>
                <h3>{currentPost.author.name}</h3>
                <IoEllipse size={7} />
                <DisplayDate date={currentPost.createdAt} show={'ago'} />
              </span>
              <p>{currentPost.author.position}</p>
            </div>
          </div>

          <div className={styles.postContent}>{currentPost.content}</div>

          <div className={styles.largeimageHolder}>
            <img src={currentPost.image} alt={`a post`} />
          </div>

          <div className={styles.postActions}>
            <span onClick={() => handleLike()}>
              {heartIcon}
              <p>{noLikes}</p>
            </span>
            <span>
              <IoChatboxOutline size={25} />
              <p>{currentPost.comments.length}</p>
            </span>
            <span>
              <IoSendOutline size={25} />
              <p>Send</p>
            </span>
            <span onClick={sharePost}>
              <IoShareSocialOutline size={25} className={styles.icon} />
              <p>Share</p>
            </span>
          </div>
          <div className={styles.comments}>
            <span>Comments</span>
            <CommentList 
            comments={currentPost.comments} 
            likeComment={likeComment} />
          </div>
        </div>
      )}
    </>
  );
};

export default PostDetail;
import { GetServerSideProps } from 'next';
import { getDevice } from '../../server/getDevice';
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  return {
    props: {
      isMobile: Boolean(getDevice(req))
    }, // will be passed to the page component as props
  };
};

