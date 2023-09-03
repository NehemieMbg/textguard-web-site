'use client';

import { ReactElement } from 'react';

const Code = (props: {
  label: string;
  text: string;
  code: ReactElement<any, any>;
}) => {
  return (
    <div className="w-full bg-highlight-gray-200 border-[1px] border-highlight-gray rounded-2xl overflow-hidden font-fira-code text-sm ">
      <div className="p-4 bg-zinc-900 flex justify-between items-center">
        <p>{props.label}</p>
        <button
          className="border-[1px] border-highlight-gray px-2 py-1 rounded-lg hover:bg-highlight-gray-200 transition-colors duration-250"
          onClick={() => {
            navigator.clipboard.writeText(props.text);
          }}
        >
          copy
        </button>
      </div>
      <div className="p-4">{props.code}</div>
    </div>
  );
};

export default Code;
