import DefaultInput from './default_input';

function InputIndex() {
	return (
		<div>
			<DefaultInput type="password" placeholder="Your Password" />
			<DefaultInput
				type="text"
				id="try"
				label="Default Input"
				defaultValue="Your Name"
			/>
			<DefaultInput type="text" width="25" height="1.5" />
		</div>
	);
}

export default InputIndex;
