import { TiMediaPlay, TiMediaPause, TiArrowRepeat } from 'react-icons/ti';
import SessionDisplaySty from './SessionDisplay.styles';
import Button from '../Button/Button';

const SessionDisplay = ({
	timerLabel,
	time,
	timerDisplay,
	timerOn,
	handlePlayPause,
	setReset,
}) => (
	<SessionDisplaySty time={time}>
		<div className="session-panel">
			<div id="timer-label">{timerLabel}</div>
			<span id="time-left">{timerDisplay}</span>
		</div>
		<Button
			id="start_stop"
			content={timerOn ? <TiMediaPause /> : <TiMediaPlay />}
			clickFn={handlePlayPause}
		/>
		<Button
			id="reset"
			content={<TiArrowRepeat />}
			clickFn={() => setReset(true)}
		/>
	</SessionDisplaySty>
);

export default SessionDisplay;
