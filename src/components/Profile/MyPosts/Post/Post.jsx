import React from "react";
import styles from './Post.module.sass'
import PostTop from "./PostTop/PostTop";
import PostBottom from "./PostBottom/PostBottom";

function Post(props){
    return (
        <div className={styles.post}>
            <PostTop />
            <div className={styles.postContent}>
                {props.message}
            </div>
            <PostBottom />
        </div>
        )

}

export default Post;