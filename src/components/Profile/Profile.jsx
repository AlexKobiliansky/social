import React from "react";
import styles from './Profile.module.sass'

import ProfileHead from "./ProfileHead/ProfileHead";
import MyPosts from "./MyPosts/MyPosts";
import RightSide from "./RightSide/RightSide";

function Profile(props){
    return (
        <div>
            <ProfileHead />
            <div className={styles.profileContent}>
                <MyPosts posts={props.state.posts}/>
                <RightSide />
            </div>
        </div>
    )
}

export default Profile;