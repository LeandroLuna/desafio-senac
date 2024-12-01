import React, { useState } from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';
import Quiz from './components/Quiz';
import './styles/App.scss';

const App = () => {
  const [theme, setTheme] = useState('theme1');

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="app">
      <ThemeSwitcher setTheme={setTheme} />
      <Quiz />
    </div>
  );
};

export default App;