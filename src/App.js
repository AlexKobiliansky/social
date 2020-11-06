import React from 'react';
import './App.sass';
import LeftSide from "./components/LeftSide/LeftSide";
import PageContent from "./components/PageContent/PageContent";
import {BrowserRouter} from "react-router-dom";
import {updateNewPostText} from './redux/state';

function App(props) {

    return (
        <BrowserRouter>
            <div className="pageWrapper">
                <LeftSide state={props.state.leftSide}/>
                <PageContent state={props.state} dispatch={props.dispatch}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
