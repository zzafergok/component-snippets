/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DefaultButton from '../components/button/default_button';
import DefaultInput from '../components/input/default_input';

type Props = {
	children: React.ReactNode;
};

type State = {
	open: boolean;
};

function SideNavigation({ children }: Props, state: State) {
	const [open, setOpen] = useState<State>(false);

	const sideNavigationStyle = css`
		display: grid;
		grid-template-columns: ${open === false ? '2fr 1fr 9fr' : '1fr 11fr'};
		min-height: 78vh;
		margin-bottom: 5rem;
	`;

	const childrenStyle = css`
		margin-top: 2rem;
		display: grid;
		grid-template-columns: 4fr;
	`;

	const sideStyle = css`
		display: ${open === false ? 'flex' : 'none'};
		align-items: center;
		flex-direction: column;
		justify-content: flex-start;
		background-color: var(--primary-font-color);

		a {
			height: 1rem;
			padding: 0.5rem 1rem;
			font-family: var(--header-font-family);
			font-size: 1rem;
			-webkit-text-decorations-in-effect: none;
			color: #fff;
			width: -webkit-fill-available;
			display: flex;
			justify-content: center;
			&:hover {
				background-color: var(--header-background-color);
				border-color: var(--header-background-color);
				width: -webkit-fill-available;
				display: flex;
				justify-content: center;
				color: var(--primary-font-color);
			}
		}
	`;

	return (
		<div css={sideNavigationStyle}>
			<div css={sideStyle}>
				<Link to="/components/input">Input</Link>
				<Link to="/components/button">Button</Link>
				<Link to="/components/switch">Switch</Link>
				<Link to="/components/radio">Radio</Link>
				<Link to="/components/form">Form</Link>
			</div>
			<div>
				<DefaultButton
					className="side-menu"
					icon={open === false ? 'ri-side-bar-fill' : 'ri-side-bar-line'}
					onClick={() => setOpen((prevState) => !prevState)}
					text=""
					width="3rem"
					radius="0"
				/>
			</div>
			<div css={childrenStyle}>{children}</div>
		</div>
	);
}

export default SideNavigation;
