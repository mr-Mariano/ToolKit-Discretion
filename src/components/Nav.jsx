import { Link } from 'react-router';
import Logo from '../assets/Logo';
import Github from '../assets/icons/Github';
import Home from '../assets/icons/Home';

import ThemeToggle from './ThemeToggle';

const GITHUB = "https://github.com/mr-Mariano"

const Nav = () => {

    return (
        <header className="fixed top-0 z-10 left-1/2 transform -translate-x-1/2 w-full">
        <nav className="flex justify-between items-center px-4 py-2 mx-auto mt-4 space-between rounded-full text-xs md:text-sm font-medium backdrop-blur-2xl w-3/4 md:w-1/2">
          <div className="flex items-center space-x-1 md:space-x-2">
            <Link to="/">
              <Logo styles="size-4 md:size-6" />
            </Link>
            <p>discrection/toolkit</p>
          </div>
          <div className="flex items-center md:space-x-2">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="block cursor-pointer p-1 box-border border border-transparent rounded-md hover:border-1 hover:bg-neutral-300 dark:hover:bg-neutral-900 transition duration-150"
            >
              <Github styles="size-4 md:size-6" />
            </a>
            <Link
              to="/"
              className="block cursor-pointer p-1 box-border border border-transparent rounded-md hover:border-1 hover:bg-neutral-300 dark:hover:bg-neutral-900 transition duration-150"
            >
              <Home styles="size-4 md:size-6" />
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>
    );
  };

export default Nav;