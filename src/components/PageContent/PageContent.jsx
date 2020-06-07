import React from 'react';
import styles from './PageContent.module.css'
import Header from "../Header/Header";
import Content from "../Content/Content";

function PageContent() {
    return(
        <div className={styles.pageContent}>
            <div className={styles.container}>
                <Header />
                <Content />
            </div>
        </div>
    )
}

export default PageContent;