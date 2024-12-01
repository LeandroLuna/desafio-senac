import React from 'react';

const ThemeSwitcher = ({ setTheme }) => {
  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <select
      className="theme-switcher"
      onChange={handleThemeChange}
      aria-label="Escolha um tema"
    >
      <option value="theme1">Tema 1</option>
      <option value="theme2">Tema 2</option>
    </select>
  );
};

export default ThemeSwitcher;
