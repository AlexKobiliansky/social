import React from "react";
import styles from "./DialogItem.module.sass";

function DialogItem(props) {
    return (
        <div className={styles.dialogItem}>
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
        </div>
    )
}

export default DialogItem;