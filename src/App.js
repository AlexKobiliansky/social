import React from 'react';
import './App.css';

function App() {
  return (
    <div className="pageWrapper">
      <aside className="leftSide">
        <a href="/" className="logo">
          <img src="/img/logo.png" alt="Aleko social network" className="imgResponsive leftsideLogo"/>
        </a>
        <nav className="mainMnu">
          <ul>
            <li><a href="#0">Чаты</a></li>
            <li><a href="#0">Новости</a></li>
            <li><a href="#0">Друзья</a></li>
            <li><a href="#0">Видео</a></li>
            <li><a href="#0">Группы</a></li>
            <li><a href="#0">Курсы</a></li>
            <li><a href="#0">Вакансии</a></li>
            <li><a href="#0">Блоги</a></li>
            <li><a href="#0">Галерея</a></li>
            <li><a href="#0">События</a></li>
          </ul>
        </nav>
      </aside>
      <div className="pageContent">
        <div className="container">
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
          <div className="content">
            content
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
