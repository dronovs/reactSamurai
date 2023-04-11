import React from "react";
import dialogsStyles from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

export function DialogItem(props) {
    let path = '/dialogs/' + props.id;

    return (
        <div className={dialogsStyles.dialog}>
            <img src={props.photo} alt="user-photo"/>
            <NavLink className={({isActive}) => isActive ? dialogsStyles.dialogItem + ' ' + dialogsStyles.activeItem : dialogsStyles.dialogItem} to={path}>{props.name}</NavLink>
        </div>
        )
}
