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
--gray: #737373
}
`;
