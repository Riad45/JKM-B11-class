
import './App.css'
import Blogs from './components/Blogs/Blogs'
import NavBar from './components/navbar/NavBar'


function App() {
  
  return (
    <>

    <NavBar></NavBar>

    


    <div className="main-container flex gap-5 mx-4  mt-10">
      <div className="blogs-container w-[70%] border-1 border-cyan-500 rounded-xl p-5 shadow-lg shadow-cyan-500/50 ">
        <Blogs></Blogs>
        
      </div>
      <div className="sideNote-container w-[30%] border-1 border-yellow-500 rounded-xl p-5 shadow-lg shadow-yellow-500/50">
      Side Note
      <h1>Reading Time : </h1>
      <h1>Total Bookmarked: </h1>
      </div>
    </div>


    </>
  )
}

export default App
