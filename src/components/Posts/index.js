import { Post } from "./Post";
import { postData } from "../../data/post-data";

export const Posts = () => {
    return (
        <div className="feed">
            {postData.map((post) =>
                <Post name={post.name} userImg={post.userImg} postImg={post.postImg} likedBy={post.likedBy} comments={post.comments} date={post.pubDate}/>
            )}
        </div>
    );
}