import { AppHeader } from '../../components/header';
import { Post } from '../../components/Post';
import { post } from '../../services/enums/post';
import {NavBar} from '../../components/FloatingNavbar';
import { NextPage } from 'next';
import {NewPost} from "../../components/Post";

const Feed: NextPage = () => {
  return (
    <>
      <AppHeader pageName={'Feed | Interna'} />
      <NewPost/>
      <div style={{ padding: '0 10px' }}>
        {post.map((post) => (
          <Post key={post._id} {...post} />
        ))}
      </div>

      <NavBar/>
    </>
  );
};

export default Feed;
