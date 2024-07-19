import Link from "next/link";
import React from "react";

const NavBar = () => {
  const menu_links = [
    {
      href_attribute: "/",
      link_text: "Home",
    },
    {
      href_attribute: "/issue",
      link_text: "Issues",
    },
  ];

  return (
    <nav className="flex justify-between items-center border-b border-solid border-cyan-300 px-10 mb-4">
      <Link href="/">Issue Tracker</Link>
      <ul className="flex justify-between">
        {menu_links.map((menuItem) => (
          <li className="px-4 py-4 hover:text-cyan-300">
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
