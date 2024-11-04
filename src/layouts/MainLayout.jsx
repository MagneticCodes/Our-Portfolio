import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/NavBar/NavBar";
import FooterSection from "../components/Shared/FooterSection/FooterSection";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <FooterSection />
    </div>
  );
};

export default MainLayout;
