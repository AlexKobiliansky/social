import React from "react";
import styles from './Messages.module.sass';
import Dialogs from "../Dialogs/Dialogs";
import Message from "./Message/Message";
import {sendMessageAC, updateNewMessageBodyAC} from '../../../redux/state';

function Messages(props) {

    let messagesElements = props.messages.map(m => <Message img={m.img} content={m.content} id={m.id}/>)
    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyAC(body))
    }


    return (
        <div className={styles.messages}>
            <div className="messagesTop">
                MessagesTop
            </div>
            <div className={styles.messagesMain}>
                {messagesElements}
            </div>
            <div className={styles.messagesBottom}>
                <textarea rows="2"
                          placeholder="Введите ваше сообщение"
                          value={newMessageBody}
                          onChange={onNewMessageChange}></textarea>
                <button onClick={onSendMessageClick}>Отправить сообщение</button>
            </div>

        </div>
    )
}

export default Messages;