import React from 'react';
import styles from './PageContent.module.sass'
import Header from "../Header/Header";
import Content from "../Content/Content";
import {updateNewPostText} from '../../redux/state';

function PageContent(props) {

    return(
        <div className={styles.pageContent}>
            <div className={styles.container}>
                <Header />
                <Content state={props.state} dispatch={props.dispatch}/>
            </div>
        </div>
    )
}

export default PageContent;