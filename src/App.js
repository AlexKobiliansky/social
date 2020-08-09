import React from 'react';
import './App.sass';
import LeftSide from "./components/LeftSide/LeftSide";
import PageContent from "./components/PageContent/PageContent";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="pageWrapper">
          <LeftSide />
          <PageContent />
        </div>
      </BrowserRouter>
  );
}

export default App;
