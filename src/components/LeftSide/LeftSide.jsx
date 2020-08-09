import React from 'react';
import styles from './LeftSide.module.sass'
import {NavLink} from "react-router-dom";

function LeftSide () {
    return  (
        <aside className={styles.leftSide}>
            <a href="/">
                <img src="/img/logo.png" alt="Aleko social network" className={styles.logo + " imgResponsive"}/>
            </a>
            <nav className="mainMnu">
                <ul>
                    <li><NavLink to="/profile" activeClassName={styles.active}>Профиль</NavLink></li>
                    <li><NavLink to="/chats" activeClassName={styles.active}>Чаты</NavLink></li>
                    <li><NavLink to="/" activeClassName={styles.active}>Новости</NavLink></li>
                    <li><NavLink to="/" activeClassName={styles.active}>Друзья</NavLink></li>
                    <li><NavLink to="/" activeClassName={styles.active}>Видео</NavLink></li>
                    <li><NavLink to="/" activeClassName={styles.active}>Группы</NavLink></li>
                    <li><NavLink to="/" activeClassName={styles.active}>Курсы</NavLink></li>
                    <li><NavLink to="/" activeClassName={styles.active}>Вакансии</NavLink></li>
                    <li><NavLink to="/" activeClassName={styles.active}>Блоги</NavLink></li>
                    <li><NavLink to="/" activeClassName={styles.active}>Галерея</NavLink></li>
                    <li><NavLink to="/" activeClassName={styles.active}>События</NavLink></li>
                </ul>
            </nav>
        </aside>
        )
}

export default LeftSide;