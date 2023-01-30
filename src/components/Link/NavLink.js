import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ route }) => {
  return (
    <div>
      <li className="mr-12 hover:bg-rasel-400 hover:text-white font-serif p-2 rounded-lg ">
        <Link to={route.path}>{route.name}</Link>
      </li>
    </div>
  );
};

export default NavLink;
