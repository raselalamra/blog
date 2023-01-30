import React from "react";
import { Link } from "react-router-dom";
import "./SingleBlogCard.css";

const SingleBlogCard = ({ blogCard }) => {
  const { picture, username, title, description, name, date } = blogCard;
  return (
    <div className="bg-white shadow-gray-50 p-6 shadow-lg ease-in duration-100 rounded-b-lg transform transition duration-1000 hover:scale-x-75">
      <div className="relative mb-6">
        <Link
          to="/fashion"
          className="text-xl absolute left-0 top-0 rounded-lg p-2 bg-cyan-200	hover:bg-slate-400 hover:text-gray-100 duration-1000 animate-bounce font-serif color"
        >
          {name}
        </Link>
      </div>
      <h1 className="text-2xl text-left mt-16 font-serif">{title}</h1>
      <p className="text-gray-500 text-left mt-4 font-serif">
        {description.slice(0, 120)}
      </p>
      <div className="flex gap-6 mt-6 font-serif">
        <img className="rounded-full" src={picture} alt="" />
        <div>
          <h4 className="text-gray-500 mt-4 hover:text-cyan-500 cursor-pointer">
            {username}
          </h4>
          <p className="text-gray-400">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogCard;
