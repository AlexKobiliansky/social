import React from "react";
import styles from './Chats.module.sass';


function Chats(props) {
    return (
        <div className="dialogsWrapper">
            <div className="myDialogs">Dialogs</div>
            <div className="rightSide">right side</div>
        </div>
    )
}

export default Chats;