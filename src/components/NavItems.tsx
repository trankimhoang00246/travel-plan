import Link from "next/link";
import React from "react";

const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Planning",
    url: "/planning",
  },
  {
    title: "Discover",
    url: "/discover",
  },
];

const NavItems = ({ activeItem = 0 }: { activeItem?: number }) => {
  return (
    <div>
      {navItems.map((item, index) => (
        <Link
          key={item.url}
          href={item.url}
          className={`px-5 text-[18px] font-Poppins font-[500] ${
            activeItem === index && "text-[var(--primary-color)]"
          }`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
