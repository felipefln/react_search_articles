import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import GlobalStyle from "./styles/global";

const App: React.FC = () => (
    <React.Fragment>
        <GlobalStyle />
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </React.Fragment>
);

export default App;
