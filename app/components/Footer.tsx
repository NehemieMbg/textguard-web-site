'use client';

import Link from 'next/link';
import { footerInfo } from '../constants';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const path = pathname.split('/')[1];

  return (
    <div className={`${path ? 'lg:ml-[320px]' : ''}`}>
      <div
        className={` m-w-[1056px] text-light-gray text-sm max-container mt-10  p-8 max-md:px-4  pt-10 pb-16
	
	`}
      >
        <div className="border-t-[.5px] border-highlight-gray  p-8 pb-4 max-md:px-4"></div>

        <div className="flex flex-wrap gap-x-32 gap-y-8 max-sm:flex-col max-sm:gap-8">
          <h1 className="text-base text-white">@{footerInfo.logo}</h1>

          <ul className="flex gap-32 flex-wrap gap-x-32 gap-y-8 font-light mb-8">
            {footerInfo.navigation.map((navigation) => (
              <li key={navigation.title}>
                <h3 className="text-white mb-4">{navigation.title}</h3>

                <ul className="flex flex-col gap-4">
                  {navigation.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors duration-250"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li>
              <h3 className="text-white mb-6">
                {footerInfo.externalNavigation.title}
              </h3>
              <ul>
                {footerInfo.externalNavigation.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      className="hover:text-white transition-colors duration-250"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        <p className="text-sm font-light">{footerInfo.credit}</p>
      </div>
    </div>
  );
};

export default Footer;
