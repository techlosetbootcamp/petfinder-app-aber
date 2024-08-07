import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import PetDetail from "./pages/petDetail/PetDetail";
import Home from "./pages/home/Home";

import Category from "./pages/category/Category";
import FindAnimals from "./pages/findAnimals/FindAnimals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/categories",
        element: <Category />,
      },
      {
        path: "/pets/find",
        element: <FindAnimals />,
      },
      {
        path: "/petDetail/:petId",
        element: <PetDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
