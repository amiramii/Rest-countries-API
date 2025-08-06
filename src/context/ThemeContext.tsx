import { createContext } from "react";
type ThemeValue= "dark"| "light";
export interface Theme{
    theme:ThemeValue,
    setTheme:(theme:ThemeValue)=>void
}
export const ThemeContext=createContext<Theme>({theme:"light",setTheme:()=>{}});