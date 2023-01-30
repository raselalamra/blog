import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "../Link/NavLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "HOME", path: "/home" },
    { id: 1, name: "BLOGS", path: "/blogs" },
    { id: 1, name: "ABOUT", path: "/about" },
    { id: 1, name: "CONTACT", path: "/contact" },
  ];
  return (
    <nav className="bg-gray-200 w-full p-4 sticky top-0">
      <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
      <ul
        className={`md:flex justify-center  w-full absolute md:static duration-500 ease-in ${
          open ? "top-6" : "top-[-120px]"
        }`}
      >
        {routes.map((route) => (
          <NavLink key={route.id} route={route}></NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
