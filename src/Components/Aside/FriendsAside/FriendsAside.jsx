import React from "react";
import asideStyles from '../Aside.module.css'

export function FriendsAside(props) {

    return(
        <div className={asideStyles.friendItem}>
            <img src={props.photo} alt=""/>
            <div className={asideStyles.friendsName}>{props.name}</div>
        </div>
    )
}