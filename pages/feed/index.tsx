import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { NavBar } from '../../components/FloatingNavbar';
import { AppHeader } from '../../components/header';
import { NewPost, Post } from '../../components/Post';
import { post } from '../../services/enums/post';
import { RefreshIcon } from '../../components/RefreshIcon';

interface FeedProps{
  isMobile: boolean;
}
const Feed: NextPage = ({isMobile}: FeedProps) => {
  useEffect(() => {
    console.log(isMobile);
  }, []);

  const [showToast, setShowToast] = useState(true);
  const [posts, setPosts] = useState<IPost[]>(post);
  const addPost=(data: IPost)=>{
    setPosts([data, ...posts]);
  }
  return (
    <>
      <AppHeader pageName={'Feed | Interna'} />
      <NewPost addPost={addPost}/>
      {showToast && <RefreshIcon setToast={setShowToast}/>}
      <div style={{ padding: '0 10px' }}>
        {posts.map((post) => (
          <Post key={post._id} postData={post} isMobile={isMobile}/>
        ))}
      </div>

      <NavBar />
    </>
  );
};

export default Feed;

import { GetServerSideProps } from 'next';
import { getDevice } from '../../server/getDevice';
import { IPost } from '../../services/enums/types';
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  return {
    props: {
      isMobile: Boolean(getDevice(req))
    }, // will be passed to the page component as props
  };
};
