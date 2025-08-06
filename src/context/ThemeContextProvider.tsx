import type { ReactNode } from "react";
import { useEffect,useState } from "react";
import { ThemeContext } from "./ThemeContext";
type ThemeValue= "dark"| "light" ;
const ThemeContextProvider=({children}:{children:ReactNode})=>{
    const [theme,setThemeState]=useState<ThemeValue>(()=>{
        const saved=localStorage.getItem("theme") as ThemeValue | null;
        return saved ?? (window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 
        "dark" : 
        "light")
    });
    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",theme);
    },[theme])
    const setTheme=(theme:ThemeValue)=>{
        setThemeState(theme);
        localStorage.setItem("theme",theme);
    }
    return(
        <ThemeContext value={{theme,setTheme}}>
            {children}
        </ThemeContext>
    )
}
export default ThemeContextProvider;
