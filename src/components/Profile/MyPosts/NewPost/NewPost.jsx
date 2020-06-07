import React from "react";
import styles from './NewPost.module.sass';

function NewPost() {
    return (
        <form>
            <label>
                <input type="text" placeholder="Добавьте запись на стену"/>
            </label>
        </form>
    )
}

export default NewPost;