import React from "react";
import styles from './Chats.module.sass';
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";

function Chats(props) {
    return (
        <div className={styles.chatsWrapper}>
            <div className={styles.chatsContent}>
                <Dialogs />
                <Messages />
            </div>
            <div className="rightSide">right side</div>
        </div>
    )
}

export default Chats;