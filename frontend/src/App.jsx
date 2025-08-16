import { useState } from "react";
import { Header } from "./components";
import { Home } from "./components/pages";
import Footer from "./components/Footer";
import { RouterProvider } from "react-router-dom";
import router from "./components/router";
import Todo from "./components/todo";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Todo /> */}
    </>
  );
}

export default App;
