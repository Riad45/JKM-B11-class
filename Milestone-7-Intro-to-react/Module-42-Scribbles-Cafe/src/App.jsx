
import './App.css'
import Blogs from './components/Blogs/Blogs'
import NavBar from './components/navbar/NavBar'


function App() {
  
  return (
    <>

    <NavBar></NavBar>

    


    <div className="main-container flex gap-5">
      <div className="blogs-container w-[70%] border-x-2  border-x-blue-600 px-5">
        <Blogs></Blogs>
      </div>
      <div className="sideNote-container w-[30%] border-x-2  border-x-red-600 px-5">Side Note</div>
    </div>


    </>
  )
}

export default App
