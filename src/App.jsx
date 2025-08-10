import { useState } from "react";
import { Header } from "./components";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="flex w-full h-screen justify-center items-center">
        Jal Check App
      </div>
    </>
  );
}

export default App;
