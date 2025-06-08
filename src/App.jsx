// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import FirstPage from "./FirstPage.jsx";
import SecondPage from "./SecondPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/SecondPage" element={<SecondPage />} />
      {/* …other routes… */}
    </Routes>
  );
}

export default App;
