import React from "react";
import styles from './Post.module.sass'
import PostTop from "./PostTop/PostTop";
import PostBottom from "./PostBottom/PostBottom";

function Post(props){
    return (
        <div className={styles.post}>
            <PostTop name={props.name} ava={props.ava} time={props.time}/>
            <div className={styles.postContent}>
                {props.message}
            </div>
            <PostBottom likes={props.likes} comments={props.comments}/>
        </div>
        )

}

export default Post;