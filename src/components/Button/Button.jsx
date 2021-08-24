import ButtonSty from './Button.styles';

const Button = ({ id, content, clickFn }) => (
	<ButtonSty id={id} onClick={clickFn}>
		{content}
	</ButtonSty>
);

export default Button;
