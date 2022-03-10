/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ButtonProps } from '../../modules/button.ts';

function DefaultButton({
	text = 'Ok',
	onClick,
	color = 'white',
	backgroundColor = 'black',
	border = 'none',
	height = '2.5rem',
	width,
	icon,
	radius = '12px',
}: ButtonProps) {
	const buttonWidth = () => {
		if (text.length < 3) {
			return text.length * 2.25 + 'rem';
		} else if (text.length > 3) {
			return text.length * 1 + 'rem';
		} else {
			return '5rem';
		}
	};

	console.log(buttonWidth());
	width = buttonWidth();

	const defaultButtonStyle = css`
		color: ${color};
		background-color: ${backgroundColor};
		height: ${height};
		width: ${width};
		border: ${border};
		border-radius: ${radius};
		display: flex;
		justify-content: center;
		align-items: center;
	`;

	const iconStyle = css`
		margin-right: 1rem;
	`;

	const renderDefaultButton = () => {
		if (text && !icon) {
			return text;
		} else if (!text && icon) {
			return <i className={icon} css={iconStyle} />;
		} else if (text && icon) {
			return (
				<>
					<i className={icon} css={iconStyle} />
					{text}
				</>
			);
		} else {
			return null;
		}
	};

	return (
		<div>
			<button onClick={onClick} css={defaultButtonStyle}>
				{renderDefaultButton()}
			</button>
		</div>
	);
}

export default DefaultButton;
