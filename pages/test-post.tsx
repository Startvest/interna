import { Post } from "../components/Post";
import { post } from "../services/enums/post";

const Posts: React.FC = () => {
    return(
    <div style={{padding:'0 10px'}}>
    {
        post.map(post => (
            <Post key={post._id} {...post} />
        ))
    }
    </div>
    )
}

export default Posts;