import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    *, 
    *:before, 
    *:after {
        box-sizing: inherit;
    }

    body,
    #root {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyles;
