'use client';

import { navbar } from '@/app/constants';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import GitHub from '../icons/GitHub';
import Sun from '../icons/Sun';
import Search from '../icons/Search';
import useClickOutside from '@/app/hooks/useClickOutside';

const Nav = () => {
  const [inputOpen, setInputOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);

  const inputDivRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

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

  useEffect(() => {
    if (inputOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputOpen]);

  return (
    <header className="w-full bg-dark-gray py-3 px-8 border-b-[1px] border-highlight-gray">
      <nav className="flex gap-6 max-container items-center text-light-gray ">
        <Link href={'/docs'}>
          <h1 className="font-md text-sm text-white">{navbar.logo}</h1>
        </Link>

        <div className="flex justify-between items-center w-full">
          <ul className="text-sm font-sans">
            {navbar.links.map((link) => (
              <li
                key={link.label}
                className="hover:text-white transition-colors duration-200 font-light"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-6 items-center">
            {/* <input
              type="text"
              placeholder="Search Documentation"
              className="text-sm px-2.5 py-1 rounded-full w-[448px] bg-action-gray"
            /> */}
            <div
              className="flex items-center justify-between bg-action-gray px-[12px] py-1 w-[448px] rounded-full cursor-pointer border-[0.5px] border-highlight-gray hover:border-action-gray-2 transition duration-200"
              onClick={() => setInputOpen(true)}
            >
              <div className="flex items-center gap-2.5">
                <Search />
                <p className="text-sm font-light">Search documentation...</p>
              </div>

              <p className="text-sm font-light">{isMac ? '⌘K' : 'Ctrl + K'}</p>
            </div>

            <a
              href="https://github.com/NehemieMbg/textGuard"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              <GitHub />
            </a>

            <div className="hover:text-white transition-colors duration-200 cursor-pointer">
              <Sun />
            </div>
          </div>
        </div>
      </nav>

      {inputOpen && (
        <div className="top-0 left-0 w-full h-full fixed backdrop-blur-sm bg-highlight-gray-200 opacity-[.80] flex justify-center z-10">
          <div className="box-content py-[205px] px-[32px] max-w-[576px] w-full">
            <div
              className="bg-dark-gray flex items-center border-[.5px] border-action-gray rounded-lg"
              ref={inputDivRef}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center w-full">
                  <div className="p-4 text-light-gray">
                    <Search />
                  </div>
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="bg-inherit text-sm font-light   outline-none text-white w-full"
                    ref={inputRef}
                  />
                </div>

                <div className="p-3 box-border">
                  <p className="text-light-gray text-[9px] font-light bg-action-gray p-1 px-2 rounded-md">
                    ESC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
