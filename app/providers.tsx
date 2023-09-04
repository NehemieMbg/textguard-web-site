'use client';

import { ReactNode, useState } from 'react';
import { Context } from './context/context';

const Providers = (props: { children: ReactNode }) => {
  const [themeValue, setThemeValue] = useState<'light' | 'dark'>('dark');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{ themeValue, setThemeValue, isMenuOpen, setIsMenuOpen }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Providers;
