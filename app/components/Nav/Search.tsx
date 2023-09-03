import useClickOutside from '@/app/hooks/useClickOutside';
import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import Search from '../icons/Search';
import { searchResults } from '@/app/constants';
import Link from 'next/link';

interface SearchType {
  title: string;
  content: string;
  link: string;
}

const SearchTextguard = (props: {
  inputOpen: boolean;
  closeSearch: () => void;
}) => {
  const { inputOpen, closeSearch } = props;

  const inputDivRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchType[]>([]);

  useClickOutside(inputDivRef, () => closeSearch());

  useEffect(() => {
    if (inputOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputOpen]);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setQuery(query);

    const filtered = searchResults.filter(
      (doc) =>
        doc.title.toLowerCase().includes(query.toLowerCase()) ||
        doc.content.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  }

  return (
    inputOpen && (
      <div className="top-0 left-0 w-full h-full fixed backdrop-blur-sm bg-action-gray-200 flex justify-center z-10">
        <div className="box-content py-[205px] px-[32px] max-w-[576px] w-full">
          <div
            className="bg-dark-gray flex items-center border-[.5px] border-action-gray rounded-lg opacity-100"
            ref={inputDivRef}
          >
            <div className="w-full">
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
                    value={query}
                    onChange={handleSearch}
                  />
                </div>
                <div className="p-3 box-border">
                  <p className="text-light-gray text-[9px] font-light bg-action-gray p-1 px-2 rounded-md">
                    ESC
                  </p>
                </div>
              </div>

              {query && (
                <ul className="text-white">
                  {results.map((result, index) => (
                    <li key={index} onClick={closeSearch}>
                      <Link
                        href={result.link}
                        className="w-full px-4 py-2 block hover:bg-[#282C34] transition-colors duration-250"
                      >
                        <div>
                          <h2 className="mb-2">{result.title}</h2>
                          <p className="text-sm text-light-gray font-light overflow-hidden">
                            {result.content.slice(0, 150)}...
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SearchTextguard;
