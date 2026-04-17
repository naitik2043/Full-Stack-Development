import { useReducer } from "react";
import { ThemeContext, UserContext, LangContext } from "./context";

//create reducer function

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };

    case "SET_USER":
      return { ...state, user: action.payLoad };

    case "SET_LANG":
      return { ...state, lang: action.payLoad };
    default:
      return state;
  }
}

// 1.create common state object 

const initialState = {
  theme: "light",
  user: { name: "Guest" },
  lang: "en",
};

const AppProvider = ({ children }) => {
  //create single state object

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={{ state, dispatch }}>
        <LangContext.Provider value={{ state, dispatch }}>
          {children}
        </LangContext.Provider>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default AppProvider;
