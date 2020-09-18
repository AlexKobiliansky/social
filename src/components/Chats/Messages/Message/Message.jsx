import React from "react";
import styles from './Message.module.sass';
import Messages from "../Messages";

function Message(props) {
    return (
        <div className={styles.message}>
            <div className={styles.photo}>
                <img src={props.img} alt="alt"/>
            </div>
            <div className={styles.content}>{props.content}</div>
        </div>
    )
}

export default Message;