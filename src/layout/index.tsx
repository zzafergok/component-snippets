import React from "react";
import Dark from "./dark";
import Light from "./light";

interface IProps {
  isDark: boolean;
  children: React.ReactNode;
}

function Index(IProps, {}) {
  const { isDark = false, children } = IProps;

  const isLayout =
    process.env.NODE_ENV !== "production" ? (
      <Light isDark={isDark}> {children} </Light>
    ) : (
      <Dark isDark={isDark}> {children} </Dark>
    );
  return <>{isLayout}</>;
}

export default Index;
