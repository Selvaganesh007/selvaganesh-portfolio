'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

const NavLink = ({ title, href, onClick }) => {
  const pathname = usePathname();

  // Handle hash links
  const isActive = pathname === href || (typeof window !== "undefined" && window.location.hash === href);

  const handleClick = (e) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (onClick) onClick();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative group px-2 py-1 sm:text-xl text-[#ADB7BE] hover:text-white transition duration-300 ${
        isActive ? "text-white" : ""
      }`}
    >
      {title}
      <span
        className={`absolute left-0 bottom-0 h-[2px] w-0 bg-purple-500 transition-all duration-300 ease-in-out group-hover:w-full ${
          isActive ? "w-full" : ""
        }`}
      />
    </a>
  );
};

export default NavLink;
