import React from 'react';
import styles from './LeftSide.module.css'

function LeftSide () {
    return  (
        <aside className={styles.leftSide}>
            <a href="/">
                <img src="/img/logo.png" alt="Aleko social network" className={styles.logo + " imgResponsive"}/>
            </a>
            <nav className="mainMnu">
                <ul>
                    <li><a href="#0">Чаты</a></li>
                    <li><a href="#0">Новости</a></li>
                    <li><a href="#0">Друзья</a></li>
                    <li><a href="#0">Видео</a></li>
                    <li><a href="#0">Группы</a></li>
                    <li><a href="#0">Курсы</a></li>
                    <li><a href="#0">Вакансии</a></li>
                    <li><a href="#0">Блоги</a></li>
                    <li><a href="#0">Галерея</a></li>
                    <li><a href="#0">События</a></li>
                </ul>
            </nav>
        </aside>
        )
}

export default LeftSide;