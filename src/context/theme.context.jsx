import { createContext, useState } from "react";

// create a Context Component => the one that shares the states across the app
const ThemeContext = createContext()

// create a Wrapper Component => the one that holds the states and wraps the app
function ThemeWrapper(props) {

  const [theme, setTheme] = useState("light")
  // another state

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const passedContext = {
    theme,
    handleToggleTheme
  }

  return (
    <ThemeContext.Provider value={passedContext}>
      {props.children}
    </ThemeContext.Provider>
  )

}

export {
  ThemeContext,
  ThemeWrapper
}