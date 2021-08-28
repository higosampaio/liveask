import { createContext, useCallback } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import usePersistedState from "../hooks/usePersistedState";
import { lightTheme } from "../styles/themes/light";
import { darkTheme } from "../styles/themes/dark";

interface ThemeContextData {
  toggleTheme(): void;
  theme: any;
}

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData
);

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    "theme",
    lightTheme
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? darkTheme : lightTheme);
  }, [setTheme, theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
