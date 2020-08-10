import React from "react"
import {NavLink} from "react-router-dom";
import styles from "./NavItem.module.sass";

function NavItem(props) {
    return (
        <li><NavLink exact to={props.path} activeClassName={styles.active}><img src={props.icon} alt={props.name}/><span>{props.name}</span></NavLink></li>
    )
}

export default NavItem;