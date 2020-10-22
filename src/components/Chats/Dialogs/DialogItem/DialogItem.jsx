import React from "react";
import styles from "./DialogItem.module.sass";
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    return (
        <NavLink className={styles.dialogItem} to={"/chats/" + props.id}>
            <div className={styles.photo}>
                <img src={props.img} alt={props.name}/>
            </div>

            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.time}>{props.time}</div>
                </div>
                <div className={styles.desc}>
                    {props.desc}
                </div>
            </div>
        </NavLink>
    )
}

export default DialogItem;