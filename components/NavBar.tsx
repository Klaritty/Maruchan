import Link from "next/link";
import React from "react";

const menuItems = [
  { text: "NOSOTROS", href: "/nosotros" },
  { text: "BLOG", href: "/blog" },
  { text: "GAMING SERIES", href: "/gaming-series" },
  { text: "SOPART", href: "/soport" },
  { text: "DINAMICAS", href: "/dinamicas" },
  { text: "MUSEO VIRTUAL", href: "/museo-virtual" },
  { text: "CONTACTO", href: "/contacto" },
];

function NavBar() {
  return (
    <div className="bg-[#1e0c0c] text-white flex items-center justify-between">
      <div className="px-4">logo</div>
      <div className="font-barlow text-xs p-2 font-medium flex">
        <select className="bg-transparent border-none m-1 p-1 transition-all hover:bg-[#4b3d3d] rounded-xl "  name="" id="">
          <option value="">PRODUCTOS</option>
        </select>
        <div className="p-2">
          {menuItems.map((item, index) => (
            <Link className=" m-2 p-1 transition-all hover:bg-[#4b3d3d] rounded-xl" key={index} href={item.href}>
             {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
