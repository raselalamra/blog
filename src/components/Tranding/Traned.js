import React from "react";
import { Link } from "react-router-dom";

const Traned = ({ traned }) => {
  const { img, picture, username, date, name } = traned;
  return (
    <div className="flex">
     <div>
     <div>
        <img className="gap-4" src={img} alt="" />
      </div>
      <div>
      <Link
          to="/fashion"
          className="text-xl absolute left-0 top-0 rounded-lg p-2 bg-cyan-200	hover:bg-slate-400 hover:text-gray-100 duration-1000 animate-bounce font-serif color mt-96"
        >
          {name}
        </Link>
      </div>
     </div>
      
    </div>
  );
};

export default Traned;
