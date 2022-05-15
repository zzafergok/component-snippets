/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect } from 'react';
import SubHeader from '../block/sub_header';
import Card from '../components/card/card';

function Components() {
	const components = [
		'Button',
		'Input',
		'Radio',
		'Switch',
		'Form',
		// 'Card',
		// 'Checkbox',
		// 'Dropdown',
		// 'Select',
		// 'Textarea',
	];

	const cards = components.map((component) => (
		<Card key={component} title={component} />
	));

	useEffect(() => {
		cards;
	}, [components]);

	const cardsStyle = css`
		margin-left: -1rem;
		margin-right: -1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	`;

	return (
		<>
			<SubHeader
				leftText="Black Lives Matter"
				rightText="Stop war in Ukraine"
				marginBottom="0"
			/>
			<div css={cardsStyle}>{cards}</div>
		</>
	);
}

export default Components;
