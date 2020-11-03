import React from 'react';
import styles from './LeftSide.module.sass'
import MainMnu from "./mainMnu/MainMnu";

function LeftSide (props) {
    return  (
        <aside className={styles.leftSide}>
            <a href="/">
                <img src="/img/logo.png" alt="Aleko social network" className={styles.logo + " imgResponsive"}/>
            </a>
            <MainMnu items={props.state.mainMnu}/>
        </aside>
        )
}

export default LeftSide;