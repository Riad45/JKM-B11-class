import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Components/Home/Home.jsx'
import CustomNav from './Components/Header/CustomNav/CustomNav.jsx'
import Services from './Components/Services/Services.jsx'
import About from './Components/About/About.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component : CustomNav,
    children :[
      {index: true , Component: Home},
      {path: "services" , Component : Services},
      {path: "about" , Component : About}

    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
   
  </StrictMode>,
)
