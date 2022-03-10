/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

type Props = {
	children: React.ReactNode;
};

function FormContainer({ children }: Props) {
	const containerStyle = css`
		width: 25%;
		height: 50vh;
		border: 1px solid var(--default-border-color);
		background-color: red;
	`;

	const formStyle = css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	`;

	return (
		<div css={formStyle}>
			<div css={containerStyle}>{children}</div>
		</div>
	);
}

export default FormContainer;
