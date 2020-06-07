import React from "react";

function Header(){
    return (
        <header className="mainHead">
            <form className="searchForm">
                <label>
                    <input type="text" placeholder="Найдите друзей, видео и т.д."/>
                </label>
            </form>

            <div className="headNav">
                <a href="/" className="headName">Алексей Кобылянский</a>
                <a href="/" className="headChats">chats</a>
                <a href="/" className="headNotifications">notifications</a>
                <a href="/" className="headPhoto">
                    <img src="/img/photo.jpg" alt="alt" className="imgResponsive"/>
                </a>
            </div>
        </header>
    )
}

export default Header;