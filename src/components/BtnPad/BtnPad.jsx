import { useContext } from 'react';
import { TiArrowUpThick, TiArrowDownThick } from 'react-icons/ti';
import SessionContexts from '../../contexts/SessionContexts';
import BtnPadSty from './BtnPad.styles';
import Button from '../Button/Button';

const BtnPad = ({ id, val, valChanger }) => {
	const { handleValChange } = useContext(SessionContexts);

	return (
		<BtnPadSty>
			<div id={`${id}-label`}>{id} length</div>
			<Button
				id={`${id}-decrement`}
				content={<TiArrowDownThick />}
				clickFn={() => val > 1 && handleValChange(val, valChanger, '-')}
			/>
			<span id={`${id}-length`}>{val}</span>
			<Button
				id={`${id}-increment`}
				content={<TiArrowUpThick />}
				clickFn={() =>
					val < 60 && handleValChange(val, valChanger, '+')
				}
			/>
		</BtnPadSty>
	);
};
export default BtnPad;
