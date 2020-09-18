import React from "react";
import styles from './Messages.module.sass';
import Dialogs from "../Dialogs/Dialogs";
import Message from "./Message/Message";

function Messages(props) {
    return (
        <div className={styles.messages}>
            <div className="messagesTop">
                MessagesTop
            </div>
            <div className={styles.messagesMain}>
                <Message img="/img/avatars/avatar-1.jpg" content="Lorem ipsum dolor sit amet, consectetur."/>
                <Message img="/img/avatars/avatar-1.jpg" content="Message 2"/>
                <Message img="/img/avatars/avatar-1.jpg" content="Message 3"/>
                <Message img="/img/avatars/avatar-1.jpg" content="Message 4"/>

                <Message img="/img/avatars/avatar-1.jpg" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti doloribus quos sed? Accusamus culpa excepturi nam? Aspernatur corporis eos magnam, sit vel vero voluptatibus. Accusantium assumenda blanditiis culpa debitis dignissimos dolor, exercitationem facilis ipsam, maiores maxime numquam porro quam repellat repellendus sequi tempora, voluptates voluptatibus! Animi architecto dolore qui repellat."/>
                <Message img="/img/avatars/avatar-1.jpg" content="last message"/>
            </div>
            <div className={styles.messagesBottom}>
                <textarea rows="2" placeholder="Введите ваше сообщение"></textarea>
                <button type="submit">Отправить сообщение</button>
            </div>

        </div>
    )
}

export default Messages;