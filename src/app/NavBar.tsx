'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from 'classnames';

const NavBar = () => {

  const currentRoute =  usePathname();
  const menu_links = [
    {
      href_attribute: "/",
      link_text: "Home",
    },
    {
      href_attribute: "/issue",
      link_text: "Issues",
    }
  ];

  return (
    <nav className="flex justify-between items-center border-b border-solid border-cyan-300 px-10 mb-4">
      <Link href="/">Issue Tracker</Link>
      <ul className="flex justify-between">
        {menu_links.map((menuItem) => (
          <li key={menuItem.href_attribute} className={ 
            classnames({
              'px-4': true,
              'py-4': true,
              'hover:text-cyan-300': true,
              'text-yellow-300': currentRoute === menuItem.href_attribute,
              'text-white-300': currentRoute !== menuItem.href_attribute
            })}>
            <Link href={menuItem.href_attribute || ""}>
              {menuItem.link_text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
