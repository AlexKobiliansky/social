import React from "react";
import styles from './PostBottom.module.sass'

function PostBottom(props){
    return (
        <div className={styles.postBottom}>
            <div className={styles.likes}>
                <img src="/img/icons/reactions_like.png" alt="alt"/>
                <span>{props.likes}</span>
            </div>
            <div className={styles.comments}><span className={styles.num}>{props.comments}</span> <span className={styles.desc}>Комментария</span></div>
        </div>
    );
}

export default PostBottom;