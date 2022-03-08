import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header
        css={{
          backgroundColor: "antiquewhite",
          display: "flex",
          height: "3.5rem",
          paddingLeft: "15%",
          paddingRight: "15%",
          // "&:hover": {
          //   color: 'orange',
          // },
        }}
      >
        <div className="container-fluid d-flex align-items-center">
          <div className="row">
            <nav className="col-md-12">
              <Link to="/">Home</Link>
            </nav>
          </div>
        </div>
        <div className="container-fluid d-flex align-items-center">
          <div className="row">
            <nav className="col-md-4">
              <Link to="/components">Component</Link>
            </nav>
            <nav className="col-md-4">
              <Link to="/documents">Documents</Link>
            </nav>
            <nav className="col-md-4">
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
