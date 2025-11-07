import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./Components/Pages/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/Pages/About.jsx";
import Services from "./Components/Pages/Services.jsx";
import Users from "./Components/Pages/Users.jsx";
import Users2 from "./Components/Pages/Users2.jsx";
import UserDetails from "./Components/Users/UserDetails.jsx";

const Users2DataPromise = fetch(
  "https://jsonplaceholder.typicode.com/users"
).then((res) => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "about", element: <About></About> },
      { path: "services", element: <Services></Services> },
      {
        path: "users",
        Component: Users,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },

      {
        path: "users2",

        element: (
          <Suspense fallback={<span>Loading .....</span>}>
            <Users2 Users2DataPromise={Users2DataPromise}></Users2>
          </Suspense>
        ),
      },

      {
        path: "users/:userId",

        loader: ({params}) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
