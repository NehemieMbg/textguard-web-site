'use client';

import { navbar } from '@/app/constants';
import { useRef, useState, useEffect, useContext } from 'react';
import { usePathname } from 'next/navigation';
import { Context } from '@/app/context/context';
import Link from 'next/link';
import GitHub from '../icons/GitHub';
import Sun from '../icons/Sun';
import SearchTextguard from './Search';
import useClickOutside from '@/app/hooks/useClickOutside';
import Search from '../icons/Search';
import Hamburger from '../icons/Hamburger';
import Xmark from '../icons/Xmark';
import Moon from '../icons/Moon';

const Nav = () => {
  const pathname = usePathname();
  const { isMenuOpen, setIsMenuOpen, themeValue, setThemeValue } =
    useContext(Context);

  const pathArray = pathname.split('/');
  const path = pathArray[1];
  console.log(path);

  const [inputOpen, setInputOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);

  const inputDivRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(inputDivRef, () => setInputOpen(false));

  useEffect(() => {
    // Detect if the user is on a Mac
    const platform = window.navigator.platform;
    setIsMac(platform.includes('Mac'));

    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setInputOpen(true);
      }

      if (event.key === 'Escape') {
        setInputOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className="w-full z-30 bg-dark-gray py-3 px-8 max-md:px-4 border-b-[1px] border-highlight-gray top-0 sticky">
      <nav className="flex gap-6 items-center text-light-gray ">
        {!isMenuOpen ? (
          <div
            className="text-white cursor-pointer lg:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Hamburger />
          </div>
        ) : (
          <div
            className="text-white cursor-pointer lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <Xmark />
          </div>
        )}

        <Link href={'/'}>
          <h1 className="font-md text-sm text-white">{navbar.logo}</h1>
        </Link>

        <div className="flex justify-between items-center w-full">
          <ul className="text-sm font-sans">
            {navbar.links.map((link) => (
              <li
                key={link.label}
                className="hover:text-white transition-colors duration-200 font-light"
              >
                <Link
                  href={link.href}
                  className={`${'/' + path === link.href ? 'text-white' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-6 items-center">
            <div
              className={`flex items-center justify-between bg-[#282C34] px-[12px] py-1 lg:w-[448px] rounded-full cursor-pointer border-[0.5px] border-highlight-gray hover:border-action-gray-2 transition duration-200
              ${pathname === '/' ? 'hidden' : ''}
              `}
              onClick={() => setInputOpen(true)}
            >
              <div className="flex items-center gap-2.5">
                <Search />
                <p className="text-sm font-light max-lg:hidden">
                  Search documentation...
                </p>
              </div>

              <p className="mx-2 lg:hidden max-sm:hidden">|</p>

              <p className="text-sm font-light max-sm:hidden">
                {isMac ? '⌘K' : 'Ctrl + K'}
              </p>
            </div>

            <a
              href="https://github.com/NehemieMbg/textGuard"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200 max-sm:hidden"
            >
              <GitHub />
            </a>

            {themeValue === 'dark' ? (
              <div
                className="hover:text-white transition-colors duration-200 cursor-pointer w-[24px]"
                onClick={() => setThemeValue('light')}
              >
                <Sun />
              </div>
            ) : (
              <div
                className="hover:text-white transition-colors duration-200 cursor-pointer w-[24px]"
                onClick={() => setThemeValue('dark')}
              >
                <Moon />
              </div>
            )}
          </div>
        </div>
      </nav>

      <SearchTextguard
        inputOpen={inputOpen}
        closeSearch={() => setInputOpen(false)}
      />
    </header>
  );
};

export default Nav;
