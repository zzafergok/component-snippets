import React from "react";
import Header from "../block/header";

type IProps = {
  children: React.ReactNode;
};

function Dark({ children }: IProps) {
  return (
    <>
      <Header />
      <h3>Dark</h3>
      {children}
    </>
  );
}

export default Dark;
