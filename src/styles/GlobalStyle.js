import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body,
    html {
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
    color: #737373;
    button, a {
        cursor:pointer;
    }
}

:root {
--gray: #737373;
--bgColor:#55c0dc;
--navColor:#3188ae;
}
`;
