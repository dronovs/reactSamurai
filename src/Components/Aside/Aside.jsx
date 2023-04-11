import React from "react";
import asideStyles from './Aside.module.css';
import {NavLink} from "react-router-dom";
import {FriendsAside} from "./FriendsAside/FriendsAside";

export function Aside(props) {
    const friends = props.friendsAside.friends.map(friend => <FriendsAside key={friend.id} name={friend.name} photo={friend.photo}/>)

    return (
        <aside className={asideStyles.aside}>
            <div className={asideStyles.item}>
                <NavLink to="/profile"
                         className={({isActive}) => isActive ? asideStyles.active : undefined}>Profile</NavLink>
            </div>
            <div className={asideStyles.item}>
                <NavLink to="/dialogs"
                         className={({isActive}) => isActive ? asideStyles.active : undefined}>Dialogs</NavLink>
            </div>
            <div className={asideStyles.item}>
                <NavLink to="/newsfeed"
                         className={({isActive}) => isActive ? asideStyles.active : undefined}>Newsfeed</NavLink>
            </div>
            <div className={asideStyles.item}>
                <NavLink to="/music"
                         className={({isActive}) => isActive ? asideStyles.active : undefined}>Music</NavLink>
            </div>
            <div className={asideStyles.item}>
                <NavLink to="/settings"
                         className={({isActive}) => isActive ? asideStyles.active : undefined}>Settings</NavLink>
            </div>

            <div className={asideStyles.friendsAside}>
                { friends }
            </div>

        </aside>
    );

}