import React from "react";
import styles from './Header.module.sass'

function Header(){
    return (
        <header className={styles.header}>
            <form className={styles.searchForm}>
                <label>
                    <input type="text" placeholder="Найдите друзей, видео и т.д."/>
                </label>
            </form>

            <div className={styles.nav}>
                <a href="/" className={styles.name}>Алексей Кобылянский</a>
                <a href="/" className={styles.chats}>chats</a>
                <a href="/" className={styles.notifications}>notifications</a>
                <a href="/" className={styles.myPhoto}>
                    <img src="/img/photo.jpg" alt="alt" className="imgResponsive"/>
                </a>
            </div>
        </header>
    )
}

export default Header;