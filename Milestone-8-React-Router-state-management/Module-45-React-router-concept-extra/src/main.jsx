import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./Components/Pages/Home.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/Pages/About.jsx";
import Services from "./Components/Pages/Services.jsx";

const router = createBrowserRouter([
  { path: "/", 
    element: <App></App>,
  children: [
    {index: true , element: <Home></Home>},
    {path:"about", element: <About></About>},
    {path:"services", element: <Services></Services>}
    
    
  ]
  }
]
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <RouterProvider router = {router}/>
  </StrictMode>
);
