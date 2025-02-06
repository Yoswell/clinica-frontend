import { useState, useEffect } from "react"

const lightTheme = {
    "--bg-body": "#efefef",
    "--bg-body-br1": "#f7f7f7",
    "--bg-body-br3": "#e6e5e7",
    "--bg-body-br4": "#f9fbfc",
    "--bg-body-br8": "#ffffff",
    "--bg-black": "#0f1318",
    "--bg-gray": "#1f2125",
    "--bg-gray-br1": "#2c2f36",
    "--bg-white": "#fff",
    
    "--font-especial": "#0f1318",
    "--font-primary": "#1f2125", 
    "--font-secondary": "#6f7277",
    
    "--btn-blue": "#0067ff",
    "--btn-blue-dark": "#243969",
    "--btn-blue-ligth": "#eaecf8",
    
    "--btn-orange": "#fb802a",
    "--btn-orange-dark": "#2c180c",
    "--btn-orange-ligth": "#fff1e5",

    "--btn-red": "#c26d6d",
    "--btn-red-dark": "#692424",
    "--btn-red-ligth": "#fff1f1",

    "--btn-green": "#6dc29a",
    "--btn-green-dark": "#24695e",
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