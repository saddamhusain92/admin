"use client";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
function Card({title,key,snum,isActive,OnClick}) {
  const initialStaste = {
    value: "",
    copied: false,
  };
  const [state, setState] = useState(initialStaste);

  
  return (
    <div
    onClick={OnClick}
    key={key}
    className={isActive?"p-3 h-36 relative w-full cursor-pointer bg-green-200 border border-solid border-gray-300 rounded-md":"p-3 h-36 relative w-full cursor-pointer bg-white border border-solid border-gray-300 rounded-md"}
      // className={
      //   state.copied
      //     ? "p-3 h-36 relative w-full cursor-pointer bg-green-200 border border-solid border-gray-300 rounded-md"
      //     : "p-3 h-36 relative w-full cursor-pointer bg-white border border-solid border-gray-300 rounded-md"
      // }
    >
      
      <p className=" absolute top-1  right-1">{isActive&&<DocumentDuplicateIcon className="h-5 w-5 text-white"/>}</p>
      <div className="h-10 w-10 text-sm flex justify-center items-center bg-slate-500 text-zinc-100 rounded-full mb-4">{snum+1}</div>
      <CopyToClipboard
        text={title}
        onCopy={() => setState({ ...state, copied: true,active:snum })}
      >
        <p className=" text-xs break-all text-gray-500">{title}</p>
      </CopyToClipboard>
    </div>
  );
}

export default Card;
