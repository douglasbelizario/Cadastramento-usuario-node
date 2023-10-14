import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        font-family: 'poppins', sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        background-color: #0093E9;
        background-image: linear-gradient(160deg, #0093E9 0%, #5c5cf2 100%);


    }
`;

export default Global;