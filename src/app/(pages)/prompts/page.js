"use client";
import Cards from "@/app/_layout/Card";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { path } from "@/lib/utils";
function Prompts() {
  const [posts, setPosts] = useState([]);
  const [activeButton, setActiveButton] = useState(1);
  const [activeCard, setActiveCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPosts = posts.filter((post) =>
    post.prompt.toLowerCase().includes(searchTerm.toLowerCase())
  );
const copyStatus = ()=>{
  navigator.clipboard.writeText('https://www.instagram.com/p/B0xQZ3XA5')
}
const getprompt = async (str,n) => {
    const response = await fetch(`${path}/api/prompts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: str }),
    });
    const data = await response.json();
    setPosts(data);
    setActiveButton(n)
  
  };
const cardStatus = (index)=>{
  setActiveCard(index)
} 
useEffect(() => {
    fetch(`${path}/api/prompts`)
      .then((response) => response.json())
      .then((data) => setPosts(data.default));
  }, []);
  return (
    <>
      <div className="lg:px-24 px-3 h-auto">
        <div className=" text-center m-4 lg:m-15">
          <h1 className=" text-xl lg:text-3xl font-bold">
            Discover The Collection
          </h1>
          <p className="mt-3">
            Explore our curated list of prompts that will help you to improve{" "}
            <br /> your writing skills and get started with storytelling!{" "}
            <Link className="text-cyan-400" href={"https://www.google.com/"}>
              Google
            </Link>
          </p>
          <p className="mt-2">Docs And Open AI</p>
        </div>

        <div className="flex justify-center">
          <div className="relative lg:w-2/6  flex items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 px-2 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
            />
            <div className="absolute inset-y-0 right-0 py-0.5 px-0.5 flex">
              <button className="inline-flex items-center hover:bg-gray-300  rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
                <MagnifyingGlassIcon className="h-4 mx-2" />
              </button>
            </div>
          </div>
        </div>

        <nav className=" w-full grid lg:grid-cols-8 grid-cols-3 gap-4 mt-5">
          <button
            onClick={() => getprompt("base",1)}
            className={activeButton===1?"px-1.5 py-2 bg-slate-500 text-white  border-solid border focus:border-gray-600 rounded-md text-sm":"px-1.5 py-2 focus:bg-white focus:text-gray-900 border-solid border focus:border-gray-300 rounded-md text-sm"}
          >
            All Lists
          </button>
          <button
            onClick={() => getprompt("develop",2)}
            className={activeButton===2?"px-1.5 py-2 bg-slate-500 text-white  border-solid border focus:border-gray-600 rounded-md text-sm":"px-1.5 py-2 focus:bg-white focus:text-gray-900 border-solid border focus:border-gray-300 rounded-md text-sm"}
            
          >
            Development
          </button>
          <button
            onClick={() => getprompt("image",3)}
            className={activeButton===3?"px-1.5 py-2 bg-slate-500 text-white  border-solid border focus:border-gray-600 rounded-md text-sm":"px-1.5 py-2 focus:bg-white focus:text-gray-900 border-solid border focus:border-gray-300 rounded-md text-sm"}
           
          >
            Image AI
          </button>
          <button
            onClick={() => getprompt("blogs",4)}
            className={activeButton===4?"px-1.5 py-2 bg-slate-500 text-white  border-solid border focus:border-gray-600 rounded-md text-sm":"px-1.5 py-2 focus:bg-white focus:text-gray-900 border-solid border focus:border-gray-300 rounded-md text-sm"} 
          >
            Blogs
          </button>
        </nav>
        <div className="my-10 grid lg:grid-cols-4 grid-cols-2   lg:gap-4  gap-2">
          {filteredPosts.map((p, i) => (
            <Cards OnClick={()=>cardStatus(i)}  isActive={i===activeCard} snum={i} title={p.prompt} key={p.id} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Prompts;
