import { createGlobalStyle } from "styled-components";
import background from "../assets/background.jpg";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background-image: url(${background});
        background-size: cover;
        /* background-blend-mode: lighten; */
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 16px Roboto, sans-serif;

    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button {
        cursor: pointer
    }


`;
