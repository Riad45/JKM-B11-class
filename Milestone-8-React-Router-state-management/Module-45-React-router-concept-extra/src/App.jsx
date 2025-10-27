
import { Outlet } from 'react-router'
import './App.css'
import Nav from './Components/NavBar/Nav'
import Footer from './Components/Footer/Footer';

function App() {


  return (
    <>
    <Nav></Nav>
    <Outlet></Outlet>
    <Footer></Footer>

    </>
  )
}

export default App;
