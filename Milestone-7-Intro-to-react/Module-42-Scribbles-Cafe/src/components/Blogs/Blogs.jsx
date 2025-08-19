import React, { useEffect, useState } from 'react';
import Blog from '../Blog/blog';

const Blogs = ({handleMarkAsRead}) => {

    const [blogs ,setBlogs] = useState([]);

useEffect(()=>{

    fetch("blogs.json")
    .then(res=>res.json())
    .then(data=> setBlogs(data));

    
},[])

console.log(blogs);

    return (
        <div>

            <h2 className=' text-2xl mb-5'>Total Blogs: {blogs.length}</h2>

         <div className='grid gap-5'>
               {
                blogs.map(blog=><Blog handleMarkAsRead={handleMarkAsRead} blog={blog}></Blog>)
            }
         </div>
            
        </div>
    );
};

export default Blogs;