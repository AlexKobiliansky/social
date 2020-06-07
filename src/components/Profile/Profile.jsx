import React from "react";
import styles from './Profile.module.sass'

import ProfileHead from "./ProfileHead/ProfileHead";
import MyPosts from "./MyPosts/MyPosts";
import RightSide from "./RightSide/RightSide";

function Profile(){
    return (
        <div>
            <ProfileHead />
            <div className="profileContent">
                <MyPosts />
                <RightSide />
            </div>
        </div>
    )
}

export default Profile;