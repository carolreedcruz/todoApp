import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./views/indexPage";
import NavBar from "./components/navBar/navbar";
import AboutPage from "./views/aboutPage/about";
import TodoList from "./views/todoPage/ToDoList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/todo",
    element: <TodoList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
