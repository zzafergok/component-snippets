/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <footer
      css={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "darkgoldenrod",
        color: "white",
        textAlign: "center",
        height: "5rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p>Home</p>
          </div>
          <div className="col-md-4">
            <p>Components</p>
          </div>
          <div className="col-md-4">
            <p>Contact</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
