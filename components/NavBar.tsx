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

const socialMediaIcon = [
  { text: "F", href: "/f" },
  { text: "T", href: "/t" },
  { text: "I", href: "/i" },
  { text: "Y", href: "/y" },
  { text: "T", href: "/t" },
];

function NavBar() {
  return (
    <div className="bg-[#1e0c0c] text-white flex items-center justify-between">
      <div className="px-4">logo</div>
      <div className="font-barlowCondensed font-medium text-[0.8rem] p-2  flex">
        <select className="bg-transparent border-none m-1 p-1 transition-all hover:bg-[#4b3d3d] rounded-xl "  name="" id="">
          <option value="">PRODUCTOS</option>
        </select>
        <div className="p-1 flex items-center space-x-2">
          {menuItems.map((item, index) => (
            <Link className="p-[0.3rem] transition-all hover:bg-[#4b3d3d] rounded-xl" key={index} href={item.href}>
             {item.text}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          {socialMediaIcon.map((social, key) => (
            <Link className=" inline-block" key={key} href={social.href}>
              <span className="bg-white rounded-full p-1 text-[#a81f38] w-5 h-5 flex items-center justify-center">
                {social.text}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
