import React, { ReactNode } from "react";
import { Footer, Nav } from "./components";
import { useLocation, useNavigate } from "react-router-dom";

interface LayoutInterface {
  children: ReactNode;
}

function Layout({ children }: LayoutInterface) {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Nav />}
      {children}
      <Footer />
    </>
  );
}

export default Layout;
