const AppFunctions = ({ timerOn, setTimerOn, setHasStarted }) => {
	const handleValChange = (val, valChanger, type) => {
		if (!timerOn) {
			setHasStarted(false);
			if (type === '+') {
				valChanger(val + 1);
			} else {
				valChanger(val - 1);
			}
		}
	};

	const handlePlayPause = () => {
		setTimerOn(!timerOn);
		setHasStarted(true);
	};

	return { handleValChange, handlePlayPause };
};

export default AppFunctions;
