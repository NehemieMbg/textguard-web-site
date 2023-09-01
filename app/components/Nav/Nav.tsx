import { navbar } from '@/app/constants';
import Link from 'next/link';
import GitHub from '../icons/GitHub';
import Sun from '../icons/Sun';

const Nav = () => {
  return (
    <header className="w-full">
      <nav className="flex gap-2.5">
        <h1 className="">{navbar.logo}</h1>

        <div>
          <ul>
            {navbar.links.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <div>
            <a
              href="https://github.com/NehemieMbg/textGuard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
            <div>
              <Sun />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
