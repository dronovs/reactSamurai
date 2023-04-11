import React from "react";
import dialogsStyles from '../Dialogs.module.css';

export function Message(props) {
    return (<div className={dialogsStyles.message}>
            {props.message}
        </div>)
}
