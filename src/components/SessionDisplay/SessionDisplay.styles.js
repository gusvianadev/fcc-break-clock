import styled from 'styled-components';

const SessionDisplaySty = styled.div`
	& .session-panel {
		border: 5px solid #13353a;
		border-radius: 30px;
		margin: auto;
		padding: 1rem;
		width: fit-content;

		& #time-left {
			color: ${({ time }) => (time >= 60 ? '#ffffff' : '#9e0f10')};
			font-size: 2em;
		}
	}
`;

export default SessionDisplaySty;
