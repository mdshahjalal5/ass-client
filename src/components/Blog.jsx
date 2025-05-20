import React from "react";
import { blogs } from "../constant";
import BlogCard from "./BlogCard";
import { Helmet } from "react-helmet-async";

const BlogsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Helmet>
        <title>FAQ || Subscription Box</title>
      </Helmet>
      <h1 className="text-xl font-bold  mb-8  text-purple-500 font-kaushan border w-fit mx-auto px-7 py-[2px] rounded-md bg-gray-200 grad-orange">
        General questions to know before starting your subscription box
      </h1>
      {blogs.map((blog, index) => (
        <BlogCard key={index} question={blog.question} answer={blog.answer} />
      ))}
    </div>
  );
};

export default BlogsPage;
