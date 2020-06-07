import React from "react";
import styles from './NewPost.module.css';

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