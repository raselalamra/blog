import React, { useEffect, useState } from "react";
import SingleBlogCard from "./SingleBlogCard";
import "./SingleBlogCard.css";

const BlogCard = () => {
  const [blogCards, setBlogCards] = useState([]);
  useEffect(() => {
    fetch("blog-card-data.json")
      .then((res) => res.json())
      .then((data) => setBlogCards(data));
  }, []);
  return (
    <div className="flex">
      <div className="mt-16 ml-16">
        <h1 className="text-2xl text-gray-600 font-bold font-serif">
          Controversial News
        </h1>
        <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4 m-6">
          {blogCards.map((blogCard) => (
            <SingleBlogCard
              key={blogCard.id}
              blogCard={blogCard}
            ></SingleBlogCard>
          ))}
        </div>
      </div>

      <div className="post">
        <div className="bg-white mt-8 mr-16 p-4 bg-slate-50 shadow-gray-50 p-4 shadow-lg shadow-gray-200">
          <h2 className="text-xl mt-4 text-slate-600">NEWSLETTER</h2>
          <p className="mt-4 text-gray-400">
            Enter your email address below to subscribe to my newsletter!!
          </p>
          <input
            className="p-4 m-4"
            type="email"
            name=""
            id=""
            placeholder="Your email address..."
            required
          />
          <button className="bg-red-300 text-white p-2 m-4 color rounded-lg">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
