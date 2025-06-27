// import React from 'react';
// import Markdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import 'github-markdown-css/github-markdown.css';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


// const SearchData = ({ searchresult }) => {

  
//   return (
    
//     <div className="markdown-body w-2/5 custom-markdown" style={{ padding: '20px' }}>
//       <Markdown
//         remarkPlugins={[remarkGfm]}
//         components={{
//           code({ node, inline, className, children, ...props }) {
//             const match = /language-(\w+)/.exec(className || '');
//             return !inline && match ? (
//               <SyntaxHighlighter
//                 children={String(children).replace(/\n$/, '')}
//                 style={oneDark}
//                 language={match[1]}
//                 PreTag="div"
//                 {...props}
//               />
//             ) : (
//               <code className={className} {...props}>
//                 {children}
//               </code>
//             );
//           }
//         }}
//       >
//         {searchresult}
        
//       </Markdown>
//     </div>
//   );
// };

// export default SearchData;



import React from 'react';
import { useEffect, useState } from "react";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Loader from './Loader';


const SearchData = ({ searchresult,Loading,SearchIcon }) => {

  const [displayText, setDisplayText] = useState("");

  //write per character typing effect

  // useEffect(() => {
  //   let index = 0;
  //   const interval = setInterval(() => {
  //     setDisplayText((prev) => prev + searchresult.charAt(index));
  //     index++;
  //     if (index >= searchresult.length) clearInterval(interval);
  //   },0); // Speed of typing (ms per char)

  //   return () => clearInterval(interval);
  // }, [searchresult]);

  useEffect(() => {
    let index = 0;
    const chunkSize = 20; // Number of characters to add per tick
    const intervalTime = 10; // Delay between chunks in ms

    setDisplayText(""); // Reset for new message

    const interval = setInterval(() => {
      const nextChunk = searchresult.slice(index, index + chunkSize);
      setDisplayText((prev) => prev + nextChunk);
      index += chunkSize;
      if (index >= searchresult.length) {
        clearInterval(interval);
        SearchIcon(false); // Stop the search icon animation when done
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [searchresult]);



  return (
    <>{
      Loading ? 

    <div className="markdown-body w-5/5 md:w-3/5 sm:w-4/5 lg:w-3/5 xl:w-2/4 2xl:w-2/5  custom-markdown" style={{ padding: '10px' }}>
      
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{                  //aa bhitare component ka sara code likha hai jadi tame alaga component kariki lekhiba chaliba 
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            const [copied, setCopied] = useState(false);
            const handleCopy = async () => {
        await navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      };

            return !inline && match ? (
              <div className="relative group">
               <button
            onClick={handleCopy}
            className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
              <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={oneDark}
              language={match[1]}
              PreTag="div"
              {...props}
              />
              </div>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
        >
         
        {displayText}
        
      </Markdown>
    </div>
    :
  

    <Loader/>
    
        }
        </>
  );
};

export default SearchData;



// import React, { useEffect, useState,useRef } from "react";
// import Markdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import "github-markdown-css/github-markdown.css";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import Loader from "./Loader";

// const SearchData = ({ searchresult, Loading }) => {
//   const [displayText, setDisplayText] = useState("");

//   useEffect(() => {
//     let index = 0;
//     const chunkSize = 20; // Number of characters to add per tick
//     const intervalTime = 10; // Delay between chunks in ms

//     setDisplayText(""); // Reset for new message

//     const interval = setInterval(() => {
//       const nextChunk = searchresult.slice(index, index + chunkSize);
//       setDisplayText((prev) => prev + nextChunk);
//       index += chunkSize;
//       if (index >= searchresult.length) {
//         clearInterval(interval);
//       }
//     }, intervalTime);

//     return () => clearInterval(interval);
//   }, [searchresult]);

//   if (!Loading) return <Loader />;
// const endRef = useRef(null);

// useEffect(() => {
//   if (endRef.current) {
//     endRef.current.scrollIntoView({ behavior: "smooth" });
//   }
// }, [displayText]); // Jab bhi displayText update hoga, scroll karega



//   return (
//     <div className="markdown-body w-2/5 custom-markdown" style={{ padding: "20px", paddingBottom: "50px" }}>
//       <Markdown
//         remarkPlugins={[remarkGfm]}
//         components={{
//           code({ node, inline, className, children, ...props }) {
//             const match = /language-(\w+)/.exec(className || "");
//             return !inline && match ? (
//               <SyntaxHighlighter
//                 style={oneDark}
//                 language={match[1]}
//                 PreTag="div"
//                 {...props}
//               >
//                 {String(children).replace(/\n$/, "")}
//               </SyntaxHighlighter>
//             ) : (
//               <code className={className} {...props}>
//                 {children}
//               </code>
//             );
//           },
//         }}
//       >
//         {displayText}
//       </Markdown>
//     </div>
//   );
// };

// export default SearchData;
