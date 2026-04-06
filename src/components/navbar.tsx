'use client';
import { useEffect, useState } from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { Moon, Sun, Sparkles } from "lucide-react";
import { useRouter } from 'next/router';

export const Navbar = () => {
  const themeStorageKey = "flowai-theme";

  const [isDark, setIsDark] = useState(false);
  const navigate = useRouter();

  useEffect(() => {
    const savedTheme = globalThis.localStorage.getItem(themeStorageKey);
    const prefersDark = globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const nextIsDark = !prev;
      document.documentElement.classList.toggle("dark", nextIsDark);
      globalThis.localStorage.setItem(themeStorageKey, nextIsDark ? "dark" : "light");
      return nextIsDark;
    });
  };

  const links = [
    "Features",
    "How it Works",
    "AI Resume",
    "Job Matching",
    "Interview AI",
    "Pricing",
    "Docs",
  ];

  return (
    <nav className='w-full flex justify-around items-center py-3' >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#FF6A00] to-[#FF8C3A] flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <span className="text-2xl font-bold bg-linear-to-br from-[#FF6A00] to-[#FF8C3A] bg-clip-text text-transparent">
          FlowAI
        </span>
      </div>
      <div className='hidden lg:flex items-center gap-8'>
        {links.map((link, index) => (
          <a key={index} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-foreground hover:text-[#FF6A00] transition-colors">
            {link}
          </a>
        ))}
      </div>
      <div className='flex items-center gap-4'>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-accent transition-colors cursor-pointer"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-[#FF6A00]" />
          ) : (
            <Moon className="w-5 h-5 text-[#FF6A00]" />
          )}
        </button>
        <button onClick={() => navigate.push('/login')} className='hidden sm:inline-flex cursor-pointer'>Login</button>
        <button className="bg-linear-to-r from-[#FF6A00] to-[#FF8C3A] hover:opacity-90 text-white py-2 px-4 rounded-lg flex items-center gap-2">
          Get Started
          <AiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </nav>
  )
}
