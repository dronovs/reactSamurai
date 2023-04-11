import React from "react";
import headerStyles from './Header.module.css';

export function Header () {
    return(
        <header className={headerStyles.header}>
            <img className={headerStyles.mainLogo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0V0mxZX4J0qZt-zBGbb1C704Cc-BSVp5tA&usqp=CAU" alt="apple"/>
        </header>
    )
}