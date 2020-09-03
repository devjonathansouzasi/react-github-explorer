import React from 'react';
import {BrowserRouter} from "react-router-dom";

import { SWRConfig } from "swr";

import {ThemeProvider} from "contexts/ThemeContext";

import GlobalStyles from "styles/GlobalStyles";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <SWRConfig value={{
            revalidateOnReconnect: true,
          }}>
            <Routes />
          </SWRConfig>
        </BrowserRouter>
        <GlobalStyles/>
      </ThemeProvider>
    </>
  )
}

export default App;