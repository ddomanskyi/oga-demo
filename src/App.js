import React from 'react';
import './App.css';
import MainPage from './components/MainPage'
import Content from './components/Content'

const App = () => {
  return (
    <div className="App">
      <div className="Layout">
        <MainPage />
        <Content />
      </div>
    </div>
  );
}

export default App;
