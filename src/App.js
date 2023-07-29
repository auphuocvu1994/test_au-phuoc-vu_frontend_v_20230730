import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import MyRecord from "./pages/Record/MyRecord";
import Column from "./pages/Column/Column";
import TopMyPage from "./pages/Home/TopMyPage";
import "./globalStyle.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <ScrollToTopButton />
        <div className="content-web">
          <Routes>
            <Route exact path="/" element={<TopMyPage />} />
            <Route exact path="/myRecord" element={<MyRecord />} />
            <Route exact path="/column" element={<Column />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
