import React, { useState } from 'react';
import ThemeSwitcher from '../components/ThemeSwitcher';

const Header = () => {
    const [theme, setTheme] = useState('theme1');

    React.useEffect(() => {
      document.body.className = theme;
    }, [theme]);

    return (
        <header className="header">
            <ThemeSwitcher setTheme={setTheme} />
        </header>
    );
};

export default Header;