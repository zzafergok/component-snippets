import DefaultButton from './default_button';

function ButtonIndex() {
	return (
		<div>
			<DefaultButton
				onClick={() => alert('I am work!!!')}
				icon="ri-knife-blood-line"
				text="I am work"
				width="9rem"
			/>
		</div>
	);
}

export default ButtonIndex;
