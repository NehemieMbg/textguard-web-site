'use client';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const Code = (props: { label: string; text: string }) => {
  return (
    <div className="w-full bg-[#282C34] border-[1px] border-highlight-gray rounded-2xl overflow-hidden font-fira-code text-sm ">
      <div className="p-2.5 bg-zinc-900 flex justify-between items-center">
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

      <div className="p-2">
        <SyntaxHighlighter language="javascript" style={atomOneDark}>
          {props.text}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Code;
