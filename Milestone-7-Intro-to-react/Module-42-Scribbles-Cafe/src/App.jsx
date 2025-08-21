
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import NavBar from './components/navbar/NavBar'


function App() {

  const [bookmark, setBookmark]= useState([]);

  const [readingTime, setReadingTime]= useState(0);

  const handleMarkAsRead = (articleReadingTime)=>{

    // setReadingTime(readingTime+ articleReadingTime);
    // we can also do using callback updater  

    setReadingTime(previousTime => previousTime+articleReadingTime);

  }

  const handleBookmark = (title)=>{

    bookmark.includes(title) || setBookmark([...bookmark,title]);
  }
  
  return (
    <>

    <NavBar></NavBar>

    


    <div className="main-container flex gap-5 mx-4  mt-10">
      <div className="blogs-container w-[70%] border-1 border-cyan-500 rounded-xl p-5 shadow-lg shadow-cyan-500/50 ">
        <Blogs handleMarkAsRead = {handleMarkAsRead} handleBookmark = {handleBookmark}></Blogs>
        
      </div>
      <div className="sideNote-container w-[30%] border-1 border-yellow-500 rounded-xl p-5 shadow-lg shadow-yellow-500/50">
      Side Note
      <h1>Reading Time : {readingTime} </h1>
      <h1 className=''> Bookmarked: </h1>
      {
        bookmark.map(bookMarkTitle => <p key={bookMarkTitle} className='bg-yellow-100 border-2 border-yellow-600 p-4 mb-2 rounded-2xl text-lg'> {bookMarkTitle}</p>
        
        )

        
        
      }

      
      </div>
    </div>


    </>
  )
}

export default App
