import React from "react";
import Header from "../block/header";
import Footer from "../block/footer";

interface IProps {
  children: React.ReactNode;
}

function Light({ children }: IProps) {
  return (
    <>
      <Header />
      <h3>Light</h3>
      {children}
      <Footer />
    </>
  );
}

export default Light;
