/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import React from 'react';

type Props = {
	title: string;
};

function Card({ title }: Props) {
	const cardStyle = css`
		background-color: #ffb85c;
		border-radius: 4px;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
		padding: 1rem;
		height: 2rem;
		width: 12rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 1.35rem;
		margin: 0.5rem;

		&:hover {
			cursor: pointer;
			background-color: #ffc028;
		}
	`;

	return (
		<div css={cardStyle}>
			<Link
				css={{ borderBottom: '2px solid transparent !important' }}
				to={`/components/${title.toLowerCase()}`}
			>
				{title}
			</Link>
		</div>
	);
}

export default Card;
