import React from 'react';
import styles from './LeftSide.module.sass'
import MainMnu from "./mainMnu/MainMnu";

function LeftSide () {
    return  (
        <aside className={styles.leftSide}>
            <a href="/">
                <img src="/img/logo.png" alt="Aleko social network" className={styles.logo + " imgResponsive"}/>
            </a>
            <MainMnu />
        </aside>
        )
}

export default LeftSide;