import React from 'react';

const ThemeSwitcher = ({ setTheme }) => {
  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <select onChange={handleThemeChange}>
      <option value="theme1">Tema 1</option>
      <option value="theme2">Tema 2</option>
    </select>
  );
};

export default ThemeSwitcher;