import React from "react";
import { Outlet } from "react-router-dom";
import NavbarSection from "../Landing/NavbarSection";
import Footer from "../Landing/Footer";

function PublicLayout() {
  return (
    <>
      <NavbarSection/>
      <Outlet />
      <Footer />
    </>
  );
}

export default PublicLayout;