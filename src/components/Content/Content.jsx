import React from "react";
import styles from "./Content.module.sass"
import Profile from "../Profile/Profile";
import Chats from "../Chats/Chats";
import {Route} from "react-router-dom";
import {updateNewPostText} from '../../redux/state';


function Content(props) {
    return (
        <div className={styles.content}>
            <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
            <Route path='/chats' render={() => <Chats state={props.state.chatsPage}/>}/>
        </div>
    )


}

export default Content;