import React, { createContext, useState, useCallback, useEffect } from "react";

import {ThemeProvider as StyledThemeProvider} from "styled-components";

import DarkMode from "styles/themes/dark";
import LightMode from "styles/themes/light";
import usePersistedState from "hooks/usePersistedState";

interface ThemeProps {
  title: string;
  colors: {
      primary: string;
      secondary: string;
      title: string;
      subtitle: string;
      hint: string;
      black: string;
      white: string;
      sun: string;
      moon: string;
      error: string;
  };
}

export interface ThemeContextProps {
  theme: ThemeProps | null;
  toggleTheme: (theme?: ThemeProps) => void;
}

type ThemeProviderOptions = {
  initialState?: ThemeProps;
};

const ThemeContext = createContext<ThemeContextProps>({
  theme: null,
  toggleTheme: () => {},
});

const THEME_STORAGE_LABEL = "GITHUB_EXPLORER:theme";

const ThemeProvider: React.FC<ThemeProviderOptions> = ({
  children,
  initialState = LightMode,
}) => {
  const [state, setState] = usePersistedState<ThemeProps>(THEME_STORAGE_LABEL, initialState);

  const toggleTheme = useCallback((): void => {
    setState(state.title === "light" ? DarkMode : LightMode);
  }, [setState, state.title]);

  return (
    <ThemeContext.Provider value={{ theme: state, toggleTheme }}>
      <StyledThemeProvider theme={state}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };

export default ThemeContext;
