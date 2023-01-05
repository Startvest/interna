import { GetServerSideProps } from 'next';
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
import { useMutation } from 'react-query';
import { Avatar } from '../../components/Avatar';
import { CommentList } from '../../components/Comment/commentList';
import DisplayDate from '../../components/DisplayDate';
import { AppHeader } from '../../components/header';
import { LoadingIcon } from '../../components/loadScreen';
import { ShareModal } from '../../components/Modal/ShareModal';
import styles from '../../components/Post/post.module.scss';
import { Itoast, Toast } from '../../components/toast';
import { Toolbar } from '../../components/Toolbar';
import { IComment, ICreateComment, IPost } from '../../server/db/Feed';
import { getDevice } from '../../server/getDevice';
import {
  addComment,
  getPostbyId,
  likePost,
  unlikePost,
} from '../../services/feed';

type PostProps = {
  isMobile: boolean;
};
export const PostDetail: React.FC<PostProps> = ({ isMobile }) => {
  const { id } = useRouter().query;
  const [currentPost, setPost] = useState<IPost>();
  const [liked, setLiked] = useState(false);
  const router = useRouter();
  const [shareModal, setShareModal] = useState(false);
  const [noLikes, setNoLikes] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [comments, setComments] = useState<IComment[]>([]);
  const [toastData, setToastData] = useState<Itoast>({
    message: '',
    type: 'primary',
  });

  let heartIcon = liked ? <IoHeart size={25} /> : <IoHeartOutline size={25} />;

  const postMutation = useMutation(getPostbyId);
  const commentMutation = useMutation(addComment);

  const sharePost = () => {
    if (!currentPost) return;

    !isMobile
      ? setShareModal(true)
      : navigator.share({
          title: `Check out this post by ${'currentPost.author'}`,
          text: currentPost.content,
          url: `https://getinterna.com/feed/${currentPost._id}`,
        });
  };

  useEffect(() => {
    postMutation.mutate(id as string);
  }, []);

  useEffect(() => {
    if (postMutation.isSuccess) {
      const curr = postMutation.data;
      setPost(curr);
      if (curr) {
        setLiked(curr.likes.includes('63b030c13a37647b2079a2ce'));
        setNoLikes(curr.likes.length);
        console.log(curr.comments);
        setComments(curr.comments);
      }
    } else {
      console.log(postMutation.error);
    }
  }, [postMutation.isError, postMutation.isSuccess]);

  const handleLike = async () => {
    setLiked(!liked);
    if (liked) {
      setNoLikes(noLikes - 1);
      await unlikePost({
        id: id as string,
        likeId: '63b030c13a37647b2079a2ce',
      });
    } else {
      setNoLikes(noLikes + 1);
      await likePost({ id: id as string, likeId: '63b030c13a37647b2079a2ce' });
    }
  };

  const addcomment = async (data: ICreateComment) => {
    await commentMutation.mutate({ postId: id as string, comment: data });
  };

  useEffect(() => {
    setToastData({
      message: 'Comment addedd successfully',
      type: 'success',
    });
    setShowToast(true);
    console.log(commentMutation.data);
    setComments(commentMutation.data);
    // postMutation.mutate(id as string);
  }, [commentMutation.isSuccess]);

  const likeComment = (id: string) => {
    console.log(`Comment ${id} liked`);
  };
  return (
    <>
      <AppHeader pageName={'Feed | Interna'} />
      {showToast && (
        <Toast data={toastData} setToast={setShowToast} position="top-right" />
      )}
      {postMutation.isLoading && <LoadingIcon size="35" />}
      {currentPost && shareModal && (
        <ShareModal
          isOpen={shareModal}
          closeModal={() => setShareModal(!shareModal)}
          postId={currentPost._id?.toString()}
        />
      )}
      {postMutation.isSuccess && !currentPost && (
        <>
          <Toolbar>
            <MdChevronLeft
              size={30}
              onClick={() => router.back()}
              className={styles.backIcon}
            />
            <h4>Back</h4>
          </Toolbar>
          <div className={styles.noPost}>Sorry, this post does not exist</div>
        </>
      )}
      {postMutation.isSuccess && currentPost && (
        <div className={styles.largePost}>
          <Toolbar>
            <MdChevronLeft
              size={30}
              onClick={() => router.push('/feed')}
              className={styles.backIcon}
            />
            <h4>Feed</h4>
          </Toolbar>
          <div className={styles.userInfo}>
            <Avatar src={'/assets/images/user.png'} size="small" />

            <div>
              <span>
                <h3>{'currentPost.author.name'}</h3>
                <IoEllipse size={7} />
                <DisplayDate date={currentPost.createdAt} show={'ago'} />
              </span>
              <p>{'currentPost.author.position'}</p>
            </div>
          </div>

          <div className={styles.postContent}>{currentPost.content}</div>

          {currentPost.image && currentPost.image?.length > 0 && (
            <div className={styles.largeimageHolder}>
              <img
                src={currentPost.image}
                alt={`a post`}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = '/assets/illustrations/noImage.svg';
                }}
              />
            </div>
          )}

          <div className={styles.postActions}>
            <span onClick={sharePost}>
              <IoShareSocialOutline size={25} className={styles.icon} />
              <p>Share</p>
            </span>

            <span>
              <IoChatboxOutline size={25} />
              <p>{comments?.length || 0}</p>
            </span>

            <span onClick={() => handleLike()}>
              {heartIcon}
              <p>{noLikes}</p>
            </span>

            <span>
              <IoSendOutline size={25} />
              <p>Send</p>
            </span>
          </div>
          <div className={styles.comments}>
            <span>Comments</span>
            <CommentList
              addComment={addcomment}
              comments={currentPost.comments}
              likeComment={likeComment}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PostDetail;
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  return {
    props: {
      isMobile: Boolean(getDevice(req)),
    }, // will be passed to the page component as props
  };
};
