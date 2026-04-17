import { useContext } from "react";
import { ThemeContext, UserContext, LangContext } from "./context";

const App = () => {
  const { state, dispatch } = useContext(ThemeContext);
  const { theme, user, lang } = state;

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const setLang = (newLang) => {
    dispatch({ type: "SET_LANG", payLoad: newLang });
  };

  const setUser = (newUser) => {
    dispatch({ type: "SET_USER", payLoad: newUser });
  };

  return (
    <div>
      <p>Theme : {theme}</p>
      <h1>Welcome, {user.name}!</h1>
      <p>Age: {user.age}</p>
      <p>Current Language: {lang}</p>

      <button onClick={toggleTheme}>Toggle Theme</button>

      <button onClick={() => setLang(lang === "en" ? "es" : "en")}>
        Toggle Language
      </button>

      <button
        onClick={() =>
          setUser({
            ...user,
            name: user.name === "Naitik Gupta" ? "Guest User" : "Naitik Gupta",
          })
        }
      >
        Toggle User Name
      </button>

      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increase Age
      </button>
    </div>
  );
};

export default App;