import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
}
*,
*::before,
*::after{
    box-sizing: inherit;
}
html {
    box-sizing: border-box;
    font-size: 62.5%; /** * 1rem = 10px, 10px/16px = 62.5%**/
}

`;

export default GlobalStyle;