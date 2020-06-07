import React from "react";
import styles from './MyPosts.module.css'
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

function MyPosts() {
    return(
        <div>
            <NewPost />
            <div className="posts">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;