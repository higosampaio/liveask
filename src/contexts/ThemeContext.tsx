import { createContext, useState, useCallback } from "react";
import { ThemeProvider } from "styled-components";

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
  const [theme, setTheme] = useState<any>(lightTheme);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? darkTheme : lightTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
