import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
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
        ],
        newPostText: ''
    },
    chatsPage: {
        messages: [
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
        ],
        dialogs: [
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
    },
    leftSide: {
        mainMnu: [
            {
                id: 1,
                path: "/profile",
                icon: "/img/icons/main-mnu/mnu-icon-1.png",
                name: "Профиль"
            },
            {
                id: 2,
                path: "/chats",
                icon: "/img/icons/main-mnu/mnu-icon-2.png",
                name: "Чаты"
            },
            {
                id: 3,
                path: "/3",
                icon: "/img/icons/main-mnu/mnu-icon-3.png",
                name: "Новости"
            },
            {
                id: 4,
                path: "/4",
                icon: "/img/icons/main-mnu/mnu-icon-4.png",
                name: "Друзья"
            },
            {
                id: 5,
                path: "/5",
                icon: "/img/icons/main-mnu/mnu-icon-5.png",
                name: "Видео"
            },
            {
                id: 6,
                path: "/6",
                icon: "/img/icons/main-mnu/mnu-icon-6.png",
                name: "Группы"
            },
            {
                id: 7,
                path: "/7",
                icon: "/img/icons/main-mnu/mnu-icon-7.png",
                name: "Курсы"
            },
            {
                id: 8,
                path: "/8",
                icon: "/img/icons/main-mnu/mnu-icon-8.png",
                name: "Вакансии"
            },
            {
                id: 9,
                path: "/9",
                icon: "/img/icons/main-mnu/mnu-icon-9.png",
                name: "Блоги"
            },
            {
                id: 10,
                path: "/10",
                icon: "/img/icons/main-mnu/mnu-icon-10.png",
                name: "Галерея"
            },
            {
                id: 11,
                path: "/1",
                icon: "/img/icons/main-mnu/mnu-icon-11.png",
                name: "События"
            },
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        name: 'Автор нового поста',
        ava: '/img/avatars/avatar-1.jpg',
        message: state.profilePage.newPostText,
        time: 'только что',
        comments: '0',
        likes: '0'
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export default state;