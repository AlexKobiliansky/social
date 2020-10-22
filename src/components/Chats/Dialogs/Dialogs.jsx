import React from "react";
import styles from "./Dialogs.module.sass"
import DialogItem from "./DialogItem/DialogItem";

function Dialogs(props) {

    let dialogsElements = props.dialogs.map(d => <DialogItem img={d.img} name={d.name} time={d.time} desc={d.desc} id={d.id}/>)

    return (
        <div className={styles.dialogs}>
            {dialogsElements}
        </div>
    )
}

export default Dialogs;