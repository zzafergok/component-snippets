/** @jsxImportSource @emotion/react */
import { css, CSSObject } from '@emotion/react';
import { InputProps } from '../../modules/input';

function DefaultInput(InputProps) {
	const {
		className,
		type = 'text' as any,
		id,
		name,
		value,
		placeholder,
		onChange,
		onBlur,
		onFocus,
		onKeyPress,
		disabled = false,
		required = false,
		min,
		max,
		step,
		minLength,
		maxLength,
		pattern,
		size,
		autoComplete = 'off',
		autoFocus = false,
		spellCheck,
		autoSave,
		list,
		multiple,
		alt,
		src,
		width = '85%',
		height = '1.5rem',
		icon,
		defaultValue,
		label,
	} = InputProps;

	const defaultInputStyle = css`
		border: 1px solid var(--default-border-color);
		border-radius: 0.25rem;
		padding: 0.5rem;
		background-color: #fff;
		transition: all 0.3s ease-in-out;
		width: ${width};
		height: ${height};
		margin-bottom: 1rem;

		&:focus: {
			border-color: var(--input-border-color);
			box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
		}
	`;

	const labelStyle = css`
		display: block;
		margin-bottom: 0.25rem;
		font-size: 11pt;
	`;

	return (
		<div>
			{id && label && (
				<label htmlFor={id} css={labelStyle}>
					{label}
				</label>
			)}
			<input
				css={defaultInputStyle}
				className={className}
				type={type}
				id={id}
				name={name}
				value={value}
				defaultValue={defaultValue}
				placeholder={placeholder}
				onBlur={onBlur}
				onFocus={onFocus}
				onKeyPress={onKeyPress}
				onChange={onChange}
				disabled={disabled}
				required={required}
				min={min}
				max={max}
				step={step}
				minLength={minLength}
				maxLength={maxLength}
				pattern={pattern}
				size={size}
				autoComplete={autoComplete}
				autoFocus={autoFocus}
				spellCheck={spellCheck}
				autoSave={autoSave}
				list={list}
				multiple={multiple}
				alt={alt}
				src={src}
				icon={icon}
			/>
		</div>
	);
}

export default DefaultInput;
