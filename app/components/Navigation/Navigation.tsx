'use client';

import { sideNavigation } from '@/app/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navigation = () => {
  const pathname = usePathname();
  console.log(pathname);
  const pathArray = pathname.split('/');
  const path = `/${pathArray[pathArray.length - 1]}`;
  console.log(path);

  const open = true;

  return (
    <section
      className={`max-lg:w-full max-lg:fixed h-full bg-opacity-60 backdrop-blur-sm
      ${open ? 'bg-dark-gray' : ''}
    `}
    >
      <div
        className={`min-w-[320px] border-r-[1px] border-highlight-gray bg-dark-gray h-full px-8 py-6 max-lg:translate-x-[-100%] transition-all duration-300 max-lg:fixed
      ${open ? 'max-lg:translate-x-0' : ''}
      `}
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
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Navigation;
