import { useState, useEffect } from "react"

const lightTheme = {
    "--bg-body": "#efefef",
    "--bg-body-br1": "#f7f7f7",
    "--bg-body-br3": "#e6e5e7",
    "--bg-body-br4": "#f9fbfc",
    "--bg-body-br8": "#ffffff",
    "--bg-black": "#0f1318",
    "--bg-gray": "#0e1115",
    "--bg-gray-br1": "#2c2f36",
    "--bg-white": "#fff",
    
    "--font-especial": "#0f1318",
    "--font-primary": "#1f2125", 
    "--font-secondary": "#6f7277",
    
    "--btn-blue": "#0f3d7e",
    "--btn-blue-dark": "#243969",
    "--btn-blue-ligth": "#eaecf8",
    
    "--btn-orange": "#fb802a",
    "--btn-orange-dark": "#eacaad",
    "--btn-orange-ligth": "#fff1e5",

    "--btn-red": "#c26d6d",
    "--btn-red-dark": "#eaadad",
    "--btn-red-ligth": "#fff1f1",

    "--btn-green": "#6dc29a",
    "--btn-green-dark": "#adead3",
    "--btn-green-ligth": "#f1fffd",
}

const darkTheme = {

}

export const ChangeTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        const selectedTheme = theme === "light" ? lightTheme : darkTheme;
        Object.keys(selectedTheme).forEach((prop) => {
            document.documentElement.style.setProperty(prop, selectedTheme[prop]);
        });
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            id="change-theme"
            className="btn btn-avatar"
            aria-label="Change theme"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <i className="ri-sun-foggy-fill"></i>
        </button>
    )
}