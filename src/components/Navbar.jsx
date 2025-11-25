import React, { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const mobileRef = useRef(null);
  const [mobileMaxH, setMobileMaxH] = useState("0px");

  useEffect(() => {
    if (mobileRef.current) {
      setMobileMaxH(open ? `${mobileRef.current.scrollHeight}px` : "0px");
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#e5e5e5] bg-white px-2">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <a className="flex items-center space-x-1 text-black" href="/">
            <span className="font-bold">KQuest</span>
          </a>
        </div>

        <div className="flex items-center space-x-5 md:space-x-6">

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 md:flex">
            <a
              className="font-normal flex items-center text-black hover:opacity-70 transition"
              href="/blog"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-rss mr-2 size-4"
              >
                <path d="M4 11a9 9 0 0 1 9 9"></path>
                <path d="M4 4a16 16 0 0 1 16 16"></path>
                <circle cx="5" cy="19" r="1"></circle>
              </svg>

              <span>Blog</span>
            </a>

            <a
              className="font-normal flex items-center text-[#7a7a7a] hover:text-black transition"
              href="/quest"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bot mr-2 size-4"
              >
                <path d="M12 8V4H8"></path>
                <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                <path d="M2 14h2"></path>
                <path d="M20 14h2"></path>
                <path d="M15 13v2"></path>
                <path d="M9 13v2"></path>
              </svg>

              <span>Quest</span>
            </a>
          </nav>

          {/* Mobile Menu Button (UNCHANGED) */}
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center h-10 p-0 text-black hover:opacity-70 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-align-left size-6"
            >
              <path d="M15 12H3"></path>
              <path d="M17 18H3"></path>
              <path d="M21 6H3"></path>
            </svg>
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        ref={mobileRef}
        className="overflow-hidden transition-all duration-300 md:hidden"
        style={{ maxHeight: mobileMaxH }}
      >
        <nav className="flex flex-col px-4 py-3 space-y-3">
          <a href="/blog" className="text-black hover:opacity-70">Blog</a>
          <a href="/quest" className="text-[#7a7a7a] hover:text-black transition">
            Quest
          </a>
        </nav>
      </div>
    </header>
  );
}
