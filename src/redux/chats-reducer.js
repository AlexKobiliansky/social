const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const chatsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({
                id: 10,
                img: '/img/avatars/avatar-1.jpg',
                content: body
            });
            break;
    }

    return state;
}

export const sendMessageAC = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyAC = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: text});

export default chatsReducer;