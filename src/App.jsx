import { useState } from "react";
import { Header } from "./components";
import { Home } from "./components/pages";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="mt-10 mb-10">
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
