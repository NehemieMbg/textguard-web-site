import { createContext } from 'react';

interface ContextType {
  themeValue: 'light' | 'dark';
  setThemeValue: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<ContextType>({
  themeValue: 'dark',
  setThemeValue: () => {}, // empty function as a placeholder
  isMenuOpen: false,
  setIsMenuOpen: () => {}, // empty function as a placeholder
});
