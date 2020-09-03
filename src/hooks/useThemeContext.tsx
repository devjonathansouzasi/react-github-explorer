import { useContext } from "react";

import ThemeContext, { ThemeContextProps } from "contexts/ThemeContext";

export default function useThemeContext(): ThemeContextProps {
  const ctx = useContext<ThemeContextProps>(ThemeContext);
  return {theme: ctx.theme, toggleTheme: ctx.toggleTheme};
}
