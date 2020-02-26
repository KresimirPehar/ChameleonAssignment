import { createGlobalStyle } from 'styled-components';
import sizeMixin from './mixins';
import colors from '../constants/colors';

const GlobalStyles = createGlobalStyle`
    html {
        overflow: hidden;
        font-family: Roboto;
    }
    
    body {
        margin: 0;
        background-color: ${colors.bgColor};

        @media (max-width: 550px) {
            background-color: #ffffff;
          }
    }
    
    html, body, #root {
        ${sizeMixin('100vw', '100vh')}
    }
`;

export default GlobalStyles;
