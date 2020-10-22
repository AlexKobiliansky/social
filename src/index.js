import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {
        id: 1,
        name: 'Мария Антуаннета',
        ava: '/img/avatars/avatar-1.jpg',
        message: 'Post 1',
        time: '5 часов',
        comments: '24',
        likes: '1'
    },
    {
        id: 2,
        name: 'Дэвид Бэкхем',
        ava: '/img/avatars/avatar-2.jpg',
        message: 'Post 2',
        time: '5 часов',
        comments: '0',
        likes: '0'
    },
    {
        id: 3,
        name: 'Николь Шерзингер',
        ava: '/img/avatars/avatar-3.jpg',
        message: 'Post 3',
        time: '5 часов',
        comments: '6',
        likes: '4'
    },
    {
        id: 4,
        name: 'Лукас Лукасович',
        ava: '/img/avatars/avatar-4.jpg',
        message: 'Post 4',
        time: '5 часов',
        comments: '15',
        likes: '16'
    },
    {
        id: 5,
        name: 'Шекспир',
        ava: '/img/avatars/avatar-5.jpg',
        message: 'Post 5',
        time: '5 часов',
        comments: '1',
        likes: '0'
    },
];

let messages = [
    {
        id: 1,
        img: '/img/avatars/avatar-1.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur.'
    },
    {
        id: 2,
        img: '/img/avatars/avatar-1.jpg',
        content: 'Message 2'
    },
    {
        id: 3,
        img: '/img/avatars/avatar-1.jpg',
        content: 'Message 3'
    },
    {
        id: 4,
        img: '/img/avatars/avatar-1.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti doloribus quos sed? Accusamus culpa excepturi nam? Aspernatur corporis eos magnam, sit vel vero voluptatibus. Accusantium assumenda'
    }
];

let dialogs =  [
    {
        id: 1,
        name: 'Вика Баранова',
        img: '/img/avatars/avatar-1.jpg',
        time: 'позавчера',
        desc: 'Lorem ipsum dolor sit amet.'
    },
    {
        id: 2,
        name: 'Лиза',
        img: '/img/avatars/avatar-2.jpg',
        time: '3 часа',
        desc: 'Lorem ipsum dolor sit amet.'
    },
    {
        id: 3,
        name: 'Черный парень',
        img: '/img/avatars/avatar-3.jpg',
        time: '12 часов',
        desc: 'Lorem ipsum dolor sit amet.'
    },
    {
        id: 4,
        name: 'Майкл Оуэн',
        img: '/img/avatars/avatar-4.jpg',
        time: 'вчера',
        desc: 'Lorem ipsum dolor sit amet.'
    },
    {
        id: 5,
        name: 'Кира Найтли',
        img: '/img/avatars/avatar-5.jpg',
        time: '23.01.2019',
        desc: 'Lorem ipsum dolor sit amet.'
    }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
