/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { containerStyle, linkStyle } from "./header";

function Footer() {
  const footerStyle = css`
    display: flex;
    align-items: center;
    padding-left: 15%;
    padding-right: 15%;
    background-color: var(--footer-background-color);
    height: 5rem;
    position: fixed;
    bottom: 0;
    width: 100%;

    .footer-container {
      width: 70% !important;
    }
  `;
  return (
    <>
      <footer css={footerStyle}>
        <div className="footer-container " css={containerStyle}>
          <div>
            <nav>
              <Link css={linkStyle} to="/">
                Home
              </Link>
            </nav>
            <nav>
              <Link css={linkStyle} to="/components">
                Component
              </Link>
            </nav>
            <nav>
              <Link css={linkStyle} to="/documents">
                Documents
              </Link>
            </nav>
            <nav>
              <Link css={linkStyle} to="/contact">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
