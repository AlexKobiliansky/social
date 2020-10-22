import React from "react";
import styles from './MyPosts.module.sass'
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

function MyPosts(props) {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} name={p.name} ava={p.ava} time={p.time} likes={p.likes} comments={p.comments}/>)

    return(
        <div>
            <NewPost />
            <div className="posts">
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;