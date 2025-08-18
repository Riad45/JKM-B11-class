import React from "react";
import { MdBookmarkAdd } from "react-icons/md";

const Blog = ({ blog }) => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure className="w-[50%] ">
          <img src={blog.cover} alt="Cover photo" />
        </figure>
        <div className="card-body w-[50%]">
          <div className="bookmark-and-author flex justify-between items-center">
            <div className="author flex gap-5 items-center pb-5">
              <div className="avatar w-[50px]">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                  <img className="" src={blog.author_img} />
                </div>
              </div>

              <h3 className="author-name text-lg font-bold ">{blog.author}</h3>
            </div>

            <button className="bookmark"><MdBookmarkAdd size={35} /></button>
          </div>

          <h2 className="card-title text-2xl font-bold"> {blog.title}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Mark as read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
