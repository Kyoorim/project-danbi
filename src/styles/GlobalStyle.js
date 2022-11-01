import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body,
    html {
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
    color: #737373
}

:root {
    --yellow: #f3c330;
    --orange: #ef5b20;
    --darkgreen: #143705;
}
`;
