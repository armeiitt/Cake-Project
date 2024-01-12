import { Outlet, Link } from "react-router-dom";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

function Layout() {
  return (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
