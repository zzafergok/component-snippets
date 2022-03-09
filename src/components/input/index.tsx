/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import DefaultInput from "./default_input";

function InputIndex() {
  const spaceInput = css`
    input {
      margin-bottom: 1rem;
    }
  `;
  return (
    <div css={spaceInput}>
      <DefaultInput type="password" placeholder="Your Password" />
      <DefaultInput type="text" defaultValue="Your Name" />
      <DefaultInput type="text" width="25" height="1.5" />
    </div>
  );
}

export default InputIndex;
