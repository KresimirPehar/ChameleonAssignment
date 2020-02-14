import { createGlobalStyle } from 'styled-components';
import sizeMixin from './baseStyle';

const GlobalStyles = createGlobalStyle`
    html {
        overflow: hidden;
    }
    
    body {
        margin: 0;
        background-color: #F1F1F1;
    }
    
    html, body, #root {
        ${sizeMixin('100vw', '100vh')}
    }
`;

export default GlobalStyles;
