import React from "react";
import {NavLink} from "react-router-dom";
import styles from "../LeftSide.module.sass";
import NavItem from "./navItem/NavItem";

function MainMnu () {
    return (
        <nav className="mainMnu">
            <ul>
                <NavItem path="/profile" icon="/img/icons/main-mnu/mnu-icon-1.png" name="Профиль" />
                <NavItem path="/chats" icon="/img/icons/main-mnu/mnu-icon-2.png" name="Чаты" />
                <NavItem path="/1" icon="/img/icons/main-mnu/mnu-icon-3.png" name="Новости" />
                <NavItem path="/2" icon="/img/icons/main-mnu/mnu-icon-4.png" name="Друзья" />
                <NavItem path="/3" icon="/img/icons/main-mnu/mnu-icon-5.png" name="Видео" />
                <NavItem path="/4" icon="/img/icons/main-mnu/mnu-icon-6.png" name="Группы" />
                <NavItem path="/5" icon="/img/icons/main-mnu/mnu-icon-7.png" name="Курсы" />
                <NavItem path="/6" icon="/img/icons/main-mnu/mnu-icon-8.png" name="Вакансии" />
                <NavItem path="/7" icon="/img/icons/main-mnu/mnu-icon-9.png" name="Блоги" />
                <NavItem path="/8" icon="/img/icons/main-mnu/mnu-icon-10.png" name="Галерея" />
                <NavItem path="/9" icon="/img/icons/main-mnu/mnu-icon-11.png" name="События" />
            </ul>
        </nav>
    )
}

export default MainMnu;