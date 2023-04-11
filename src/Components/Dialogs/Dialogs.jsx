import React from "react";
import dialogsStyles from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {SendMessageForm} from "./Message/SendMessageForm/SendMessageForm";

export function Dialogs(props) {

    const dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id * Math.random()} id={dialog.id} photo={dialog.photo}/>);
    const messagesElements = props.state.messages.map(message => <Message message={message.message} key={message.id * Math.random()} id={message.id}/>);

    return (<div className={dialogsStyles.dialogs_wrapper}>
        <div className={dialogsStyles.dialogs}>

            { dialogsElements }

        </div>

        <div className={dialogsStyles.messages}>

            { messagesElements }

            <SendMessageForm/>

        </div>
    </div>)
}
