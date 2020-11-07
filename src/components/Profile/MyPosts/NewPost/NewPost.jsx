import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profile-reducer';




function NewPost(props) {

    let newPostElement = React.createRef();

    let addPost = (e) => {
        if (e.key === 'Enter' && e.target.value) {
            props.dispatch(addPostActionCreator());
        }
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
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