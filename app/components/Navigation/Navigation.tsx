'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import { sideNavigation } from '@/app/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Context } from '@/app/context/context';
import useClickOutside from '@/app/hooks/useClickOutside';

const Navigation = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(Context);
  const navigationRef = useRef<HTMLDivElement | null>(null);

  // state of the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  console.log('IsMenuOpen: ', isMenuOpen);

  const pathname = usePathname();
  console.log(pathname);
  const pathArray = pathname.split('/');
  const path = `/${pathArray[pathArray.length - 1]}`;
  console.log(path);

  useClickOutside(navigationRef, () => setIsMenuOpen(false));

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen && windowWidth < 1024) {
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      } else {
        document.body.style.overflow = 'auto'; // Allow scrolling
        setIsMenuOpen(false); // close the navigation
      }
    };

    // Listen for window resize events
    window.addEventListener('resize', () => handleResize);

    handleResize();

    // Cleanup function to set it back to auto (scroll)
    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen, windowWidth, setIsMenuOpen]);

  return (
    <>
      <div
        className={`${
          isMenuOpen
            ? 'w-full fixed h-full z-10 bg-dark-gray opacity-80 backdrop-blur-sm  lg:hidden'
            : 'hidden'
        }`}
      ></div>
      <section
        className={`min-w-[320px] border-r-[1px] fixed border-highlight-gray bg-dark-gray h-full px-8 py-6  transition-all duration-300 max-lg:fixed z-20
      ${isMenuOpen ? 'max-lg:translate-x-0' : 'max-lg:translate-x-[-100%]'}
      `}
        ref={navigationRef}
      >
        <ul className="w-full">
          {sideNavigation.map((navigator) => (
            <li key={navigator.title} className="mb-8 ">
              <h1 className="text-slate-100 text-sm font-light mb-4">
                {navigator.title}
              </h1>

              <ul className=" border-l-[1px] border-highlight-gray-200 w-full flex flex-col gap-2">
                {navigator.links.map((link) => (
                  <li key={link.label} className="w-full">
                    <Link
                      href={link.href}
                      className={`w-full text-sm font-light pl-9 block hover:text-slate-100 transition duration-250
					${`/${path}` === link.href ? 'text-white' : ''}
					`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Navigation;
