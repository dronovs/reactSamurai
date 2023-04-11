import React from "react";
import dialogsStyles from '../../Dialogs.module.css';

export function SendMessageForm(props) {


    return (
        <div className={dialogsStyles.sendMessageForm}>
            <input type="text" placeholder={'Write here'} className={dialogsStyles.sendMessageInput}/>
            <button className={dialogsStyles.sendMessageButton}>Send</button>
        </div>)
}
