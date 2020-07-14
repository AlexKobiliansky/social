import React from "react";
import styles from "./PostTop.module.sass"

function PostTop(){
    return (
        <div className={styles.postTop}>
            <img src="/img/avatars/avatar-1.jpg" alt="alt" className="avatar"/>
            <div className={styles.info}>
                <div className={styles.name}>Мария Шепелева</div>
                <div className={styles.time}>5 часов</div>
            </div>
        </div>
    );
}

export default PostTop;