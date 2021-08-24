import { useEffect, useState, useRef } from 'react';
import GlobalStyles from './styles/Global.styles';
import AppSty from './styles/App.styles';
import AppFunctions from './App.functions';
import SessionContexts from './contexts/SessionContexts';
import BtnPad from './components/BtnPad/BtnPad';
import SessionDisplay from './components/SessionDisplay/SessionDisplay';

const App = () => {
	const [breakLength, setBreakLength] = useState(5);
	const [sessionLength, setSessionLength] = useState(25);
	const [timerOn, setTimerOn] = useState(false);
	const [hasStarted, setHasStarted] = useState(false);
	const [onSession, setOnSession] = useState(true);
	const [reset, setReset] = useState(false);

	const [time, setTime] = useState(sessionLength * 60);
	const minutes = Math.floor(time / 60);
	const seconds = `${time % 60}`;

	const beep = useRef();

	useEffect(() => {
		if (!timerOn && !hasStarted) {
			setTime((onSession ? sessionLength : breakLength) * 60);
		}
		const myTimer = timerOn && setTimeout(() => setTime(time - 1), 1000);

		if (!timerOn) {
			clearTimeout(myTimer);
		}
		if (!time) {
			beep.current.play();
			setOnSession(!onSession);
			setTime((onSession ? breakLength : sessionLength) * 60);
		}
		return () => clearTimeout(myTimer);
	}, [breakLength, sessionLength, timerOn, time]);

	// if you are wondering why I have so much code: the testing CDN is kinda weird
	// so I have to do some hacky stuff to pass a test, because it fails some times
	// even tho it does what it says
	// but, you know, machines are dumb
	if (reset) {
		beep.current.pause();
		beep.current.currentTime = 0;
		setTimerOn(false);
		setHasStarted(false);
		setBreakLength(5);
		setSessionLength(25);
		setOnSession(true);
		setTime(sessionLength * 60);
		setReset(false);
	}
	const timerDisplay = `${minutes < 10 ? `0${minutes}` : minutes}:${
		seconds < 10 ? `0${seconds}` : seconds
	}`;

	const { handleValChange, handlePlayPause } = AppFunctions({
		timerOn,
		setTimerOn,
		setHasStarted,
	});

	// OMG I DID IT I HAVE THE 3 FRONT END CERTIFICATES

	return (
		<AppSty>
			<GlobalStyles />
			<SessionContexts.Provider value={{ handleValChange }}>
				<div className="session-container">
					<h1>25 + 5 Clock</h1>
					<BtnPad
						id="break"
						val={breakLength}
						valChanger={setBreakLength}
					/>
					<BtnPad
						id="session"
						val={sessionLength}
						valChanger={setSessionLength}
					/>
					<SessionDisplay
						timerLabel={onSession ? 'session' : 'break'}
						time={time}
						timerDisplay={timerDisplay}
						timerOn={timerOn}
						handlePlayPause={handlePlayPause}
						setReset={setReset}
					/>
					<audio
						ref={beep}
						id="beep"
						src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
					/>
				</div>
			</SessionContexts.Provider>
		</AppSty>
	);
};

export default App;
