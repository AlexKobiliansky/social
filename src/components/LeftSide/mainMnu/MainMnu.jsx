import React from "react";
import NavItem from "./navItem/NavItem";

function MainMnu (props) {

    let navItems = props.items.map(item => <NavItem path={item.path} icon={item.icon} name={item.name} />);

    return (
        <nav className="mainMnu">
            <ul>
                {navItems}
            </ul>
        </nav>
    )
}

export default MainMnu;