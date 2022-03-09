/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

export const containerStyle = css`
  padding: 0.5rem 1rem;
  width: 100%;
  div {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    gap: 20px;
  }
`;

export const linkStyle = css`
  font-family: var(--header-font-family);
`;

function Header() {
  const headerStyle = css`
    display: flex;
    align-items: center;
    background-color: var(--header-background-color);
    height: 3.5rem;
    padding-left: 15%;
    padding-right: 15%;
  `;

  return (
    <>
      <header css={headerStyle}>
        <div css={containerStyle}>
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
      </header>
    </>
  );
}

export default Header;
