import React from "react";
import styles from './Profile.module.sass'

import ProfileHead from "./ProfileHead/ProfileHead";
import MyPosts from "./MyPosts/MyPosts";
import RightSide from "./RightSide/RightSide";
import {updateNewPostText} from '../../redux/state';

function Profile(props){
    return (
        <div>
            <ProfileHead />
            <div className={styles.profileContent}>
                <MyPosts posts={props.profilePage.posts}
                         addPost={props.addPost}
                         updateNewPostText={props.updateNewPostText}
                         newPostText={props.profilePage.newPostText}/>
                <RightSide />
            </div>
        </div>
    )
}

export default Profile;