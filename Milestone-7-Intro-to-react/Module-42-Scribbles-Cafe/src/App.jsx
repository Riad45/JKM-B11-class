import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import NavBar from "./components/navbar/NavBar";

function App() {
  const [bookmark, setBookmark] = useState([]);

  const [readingTime, setReadingTime] = useState(0);
  const [readIds, setReadIds] = useState([]);

  const handleBookmark = (bookMarkBlog) => {
    // check if already bookmarked
    const alreadyBookmarked = bookmark.find(
      (mark) => mark.id === bookMarkBlog.id
    );
    if (!alreadyBookmarked) {
      setBookmark([...bookmark, bookMarkBlog]); // store object
    }
  };

  const handleMarkAsRead = (articleReadingTime, id) => {
    // setReadingTime(readingTime+ articleReadingTime);
    // we can also do using callback updater

    handleRemoveBookMark(id);
  if (!readIds.includes(id)) {
    // ✅ only add if blog not already read
    setReadingTime((previousTime) => previousTime + articleReadingTime);
    setReadIds([...readIds, id]); // mark this blog as read
    
  }

  };

  const handleRemoveBookMark = (id) => {
    const remaningBookMark = bookmark.filter((mark) => mark.id != id);

    setBookmark(remaningBookMark);
    console.log(remaningBookMark);
  };

  return (
    <>
      <NavBar></NavBar>

      <div className="main-container flex gap-5 mx-4  mt-10">
        <div className="blogs-container w-[70%] border-1 border-cyan-500 rounded-xl p-5 shadow-lg shadow-cyan-500/50 ">
          <Blogs
            handleMarkAsRead={handleMarkAsRead}
            handleBookmark={handleBookmark}
          ></Blogs>
        </div>
        <div className="sideNote-container w-[30%] border-1 border-yellow-500 rounded-xl p-5 shadow-lg shadow-yellow-500/50">
          Side Note
          <h1>Reading Time : {readingTime} </h1>
          <h1 className=""> Bookmarked: </h1>
          {bookmark.map((bookMarkBlog) => (
            <p
              key={bookMarkBlog.id}
              className="bg-yellow-100 border-2 border-yellow-600 p-4 mb-2 rounded-2xl text-lg"
            >
              {bookMarkBlog.title}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
