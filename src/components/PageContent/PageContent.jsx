import React from 'react';
import Header from "../Header/Header";
import Content from "../Content/Content";

function PageContent() {
    return(
        <div className="pageContent">
            <div className="container">
                <Header />
                <Content />
            </div>
        </div>
    )
}

export default PageContent;