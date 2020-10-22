import React from "react";
import styles from "./Content.module.sass"
import Profile from "../Profile/Profile";
import Chats from "../Chats/Chats";
import {Route} from "react-router-dom";


function Content(props) {
    return (
        <div className={styles.content}>
            <Route path='/profile' render={() => <Profile posts={props.posts}/>} />
            <Route path='/chats' render={() => <Chats messages={props.messages} dialogs={props.dialogs}/>}/>
        </div>
    )
}

export default Content;