import React, { useEffect, useState } from 'react';
import Blog from '../Blog/blog';

const Blogs = ({handleMarkAsRead,handleBookmark}) => {

    const [blogs ,setBlogs] = useState([]);

useEffect(()=>{

    fetch("blogs.json")
    .then(res=>res.json())
    .then(data=> setBlogs(data));

    
},[])


    return (
        <div>

            <h2 className=' text-2xl mb-5'>Total Blogs: {blogs.length}</h2>

         <div className='grid gap-5'>
               {
                blogs.map(blog=><Blog handleMarkAsRead={handleMarkAsRead} blog={blog} handleBookmark={handleBookmark} key={blog.id}></Blog>)
            }
         </div>
            
        </div>
    );
};

export default Blogs;