import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import FirstPage from ".FirstPage.jsx";
import Header from "./components/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Bar2 from "./components/Bar2.jsx";
import Bar1 from "./components/Bar1.jsx";
import Footer from "./components/Footer.jsx";
import FirstPage from "./FirstPage.jsx";
import SecondPage from "./SecondPage.jsx";
import ThirdPage from "./ThirdPage.jsx";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      {/* <Bar2 /> */}
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/nextpage" element={<SecondPage />} />
        <Route path="/thirdpage" element={<ThirdPage />} />
      </Routes>
    </BrowserRouter>

    {/* <FirstPage /> */}
    <Footer />
  </StrictMode>
);
