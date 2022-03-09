/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type Props = {};

function FormContainer({}: Props) {
  const containerStyle = css`
    width: 45%;
    height: 50vh;
    border: 1px solid var(--default-border-color);
    background-color: red;
  `;

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div css={containerStyle}></div>
    </div>
  );
}

export default FormContainer;
