import React from "react";
import styles from './PostBottom.module.sass'

function PostBottom(){
    return (
        <div className={styles.postBottom}>
            <div className={styles.likes}>
                <img src="/img/icons/reactions_like.png" alt="alt"/>
                <span>13</span>
            </div>
            <div className={styles.comments}><span className={styles.num}>24</span> <span className={styles.desc}>Комментария</span></div>
        </div>
    );
}

export default PostBottom;