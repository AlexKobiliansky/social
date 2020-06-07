import React from "react";
import styles from "./Content.module.css"
import Profile from "../Profile/Profile";

function Content() {
    return (
        <div className={styles.content}>
            <Profile />
        </div>
    )
}

export default Content;