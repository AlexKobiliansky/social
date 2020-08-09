import React from "react";
import styles from "./Content.module.sass"
import Profile from "../Profile/Profile";
import Chats from "../Chats/Chats";
import {Route} from "react-router-dom";


function Content() {
    return (
        <div className={styles.content}>
            <Route path='/profile' component={Profile}/>
            <Route path='/chats' component={Chats}/>
        </div>
    )
}

export default Content;