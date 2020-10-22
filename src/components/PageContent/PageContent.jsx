import React from 'react';
import styles from './PageContent.module.sass'
import Header from "../Header/Header";
import Content from "../Content/Content";

function PageContent(props) {

    return(
        <div className={styles.pageContent}>
            <div className={styles.container}>
                <Header />
                <Content state={props.state}/>
            </div>
        </div>
    )
}

export default PageContent;