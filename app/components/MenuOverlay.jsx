'use client';
import React from 'react';
import NavLink from './NavLink';

function MenuOverlay({ links, onLinkClick }) {
  return (
    <ul className='flex flex-col py-4 items-center'>
      {links.map((link, index) => (
        <li key={index} className='py-3 w-full text-center'>
          <NavLink
            href={link.path}
            title={link.title}
            onClick={onLinkClick}
          />
        </li>
      ))}
    </ul>
  );
}

export default MenuOverlay;
