import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./Components/Cards";

function App() {
  useEffect(() => {
    console.log("hello from app");
  }, []);
  return (
    <>
      <Cards />
    </>
  );
}

export default App;
