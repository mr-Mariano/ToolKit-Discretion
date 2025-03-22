import React, { useEffect, useState } from 'react';
import Sun from '../assets/Sun';
import Moon from '../assets/Moon';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        block cursor-pointer
        p-1 box-border
        border border-transparent rounded-md hover:border-1
        hover:bg-neutral-200 dark:hover:bg-neutral-900
        transition duration-150
      "
    >
      {theme === 'dark' ? (
        <Sun styles="size-4 md:size-6" />
      ) : (
        <Moon styles="size-4 md:size-6" />
      )}
    </button>
  );
};

export default ThemeToggle;