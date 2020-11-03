import React from 'react';
import styles from './NewPost.module.sass';
import {rerenderEntireTree} from '../../../../render';

function NewPost(props) {

    let newPostElement = React.createRef();

    let addPost = (e) => {
        if (e.key === 'Enter' && e.target.value) {
            props.addPost();
        }
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (

            <label>
                <input type='text'
                       placeholder='Добавьте запись на стену'
                       ref={newPostElement}
                       onKeyPress={addPost}
                       onChange={onPostChange}
                       value={props.newPostText} />
            </label>
    )
}

export default NewPost;