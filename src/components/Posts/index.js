import { Post } from "./Post";
import { postData } from "../../data/post-data";

export const Posts = () => {
    return (
        <div className="feed">
            {postData.map((post, i) =>
                <Post key={i} name={post.name} userImg={post.userImg} video={post.video} postImg={post.postImg} likedBy={post.likedBy} comments={post.comments} date={post.pubDate}/>
            )}
        </div>
    );
}