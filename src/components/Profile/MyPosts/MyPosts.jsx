import React from "react";
import styles from './MyPosts.module.sass'
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

function MyPosts() {
    return(
        <div>
            <NewPost />
            <div className="posts">
                <Post message="Post 1"/>
                <Post message="Post 2"/>
                <Post message="Post 3"/>
                <Post message="Post 4"/>
                <Post message="Post 5"/>
                <Post message="Post 6"/>
                <Post message="Post 7"/>
                <Post message="Post 8"/>
            </div>
        </div>
    )
}

export default MyPosts;