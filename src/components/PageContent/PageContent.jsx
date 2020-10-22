import React from 'react';
import styles from './PageContent.module.sass'
import Header from "../Header/Header";
import Content from "../Content/Content";

function PageContent(props) {

    return(
        <div className={styles.pageContent}>
            <div className={styles.container}>
                <Header />
                <Content posts={props.posts} messages={props.messages} dialogs={props.dialogs}/>
            </div>
        </div>
    )
}

export default PageContent;