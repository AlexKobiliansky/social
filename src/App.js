import React from 'react';
import './App.sass';
import LeftSide from "./components/LeftSide/LeftSide";
import PageContent from "./components/PageContent/PageContent";

function App() {
  return (
    <div className="pageWrapper">
      <LeftSide />
      <PageContent />
    </div>
  );
}

export default App;
