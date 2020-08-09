import React from "react";
import styles from "./PostTop.module.sass"

function PostTop(props){
    return (
        <div className={styles.postTop}>
            <img src={props.ava} alt={props.name} className="avatar"/>
            <div className={styles.info}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.time}>{props.time}</div>
            </div>
        </div>
    );
}

export default PostTop;