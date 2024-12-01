import React from 'react';
import Header from './layouts/Header';
import ModulePage from './pages/ModulePage';
import './styles/App.scss';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <ModulePage/>
    </div>
  );
};

export default App;