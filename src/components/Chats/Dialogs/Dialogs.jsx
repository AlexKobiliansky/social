import React from "react";
import styles from "./Dialogs.module.sass"
import DialogItem from "./DialogItem/DialogItem";

function Dialogs() {
    return (
        <div className={styles.dialogs}>
            <DialogItem img="/img/avatars/avatar-1.jpg" name="Вика Баранова lorem adasdas asdasdasd asdasdasdasdadasda" time="позавчера" desc="Lorem ipsum dolor sit amet."/>
            <DialogItem img="/img/avatars/avatar-2.jpg" name="Лиза" time="3 часа" desc="Lorem ipsum dolor sit amet."/>
            <DialogItem img="/img/avatars/avatar-3.jpg" name="Черный парень" time="12 часов" desc="Lorem ipsum dolor sit amet."/>
            <DialogItem img="/img/avatars/avatar-4.jpg" name="Майкл Оуэн" time="вчера" desc="Lorem ipsum dolor sit amet."/>
            <DialogItem img="/img/avatars/avatar-5.jpg" name="Кира Найтли" time="23.01.2019" desc="Lorem ipsum dolor sit amet."/>
        </div>
    )
}

export default Dialogs;