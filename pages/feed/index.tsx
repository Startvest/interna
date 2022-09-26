import { NextPage } from 'next';
import { useEffect } from 'react';
import { NavBar } from '../../components/FloatingNavbar';
import { AppHeader } from '../../components/header';
import { NewPost, Post } from '../../components/Post';
import { post } from '../../services/enums/post';

type FeedProps = {
  isMobile: boolean,
}
const Feed: NextPage<FeedProps> = ({isMobile}) => {
  useEffect(() => {
    console.log(isMobile);
  }, []);
  return (
    <>
      <AppHeader pageName={'Feed | Interna'} />
      <NewPost />
      <div style={{ padding: '0 10px' }}>
        {post.map((post) => (
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
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  return {
    props: {
      isMobile: Boolean(getDevice(req))
    }, // will be passed to the page component as props
  };
};
