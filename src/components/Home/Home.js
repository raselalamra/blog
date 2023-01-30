import React from "react";
import Banner from "../Banner/Banner";
import Beauty from "../Beauty/Beauty";
import BlogCard from "../BlogCard/BlogCard";
import ImageGallary from "../Imagegallary/ImageGallary";

const Home = () => {
  return (
    <div className="bg-slate-100">
      <Banner></Banner>
      <BlogCard></BlogCard>
      <Beauty></Beauty>
      <ImageGallary></ImageGallary>
    </div>
  );
};

export default Home;
