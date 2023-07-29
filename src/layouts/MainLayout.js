import React from "react";
import Header from "../components/Nav/Nav";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import Footer from "../components/Footer/Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <ScrollToTopButton />
      <div className="content-web">{children}</div>
      <Footer />
    </div>
  );
}
