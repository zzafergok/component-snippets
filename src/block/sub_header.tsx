/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type Props = {
  leftText?: string;
  rightText?: string;
};

function SubHeader(Props) {
  const { leftText, rightText } = Props;

  const containerStyle = css`
    div {
      display: grid;
      grid-template-columns: 3fr 3fr;

      div {
        text-decoration: underline;
        color: var(--input-border-color);
        font-weight: 500;
      }
    }
  `;

  const subHeaderStyle = css`
    width: 100%;
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    height: 2.5rem;
  `;

  const rightTextStyle = css`
    display: flex !important;
    justify-content: flex-end;
  `;
  return (
    <div css={subHeaderStyle}>
      <div css={containerStyle}>
        <div>
          <div>{leftText}</div>
          <div css={rightTextStyle}>{rightText}</div>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
