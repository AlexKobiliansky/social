import React from "react";
import styles from './MyPosts.module.sass'
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

function MyPosts() {
    return(
        <div>
            <NewPost />
            <div className="posts">
                <Post message="Post 1" name = "Мария Антуаннета" ava='/img/avatars/avatar-1.jpg' time="5 часов" likes="1" comments="24"/>
                <Post message="Post 2" name = "Дэвид Бэкхем" ava='/img/avatars/avatar-2.jpg' time="5 часов"likes="0" comments="0"/>
                <Post message="Post 3" name = "Николь Шерзингер" ava='/img/avatars/avatar-3.jpg' time="5 часов" likes="6" comments="4"/>
                <Post message="Post 4" name = "Лукас Лукасович" ava='/img/avatars/avatar-4.jpg' time="5 часов" likes="16" comments="15"/>
                <Post message="Post 5" name = "Шекспир" ava='/img/avatars/avatar-5.jpg' time="5 часов" likes="0" comments="1"/>
            </div>
        </div>
    )
}

export default MyPosts;