// AppStateContext.js
import React, { createContext, useReducer, useContext, useEffect } from "react";

// Create the context
const AppStateContext = createContext();

const appStateReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_STATE":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer);

  useEffect(() => {
    const storedState = localStorage.getItem("appState");
    if (storedState) {
      try {
        dispatch({ type: "UPDATE_STATE", payload: JSON.parse(storedState) });
      } catch (error) {
        console.error("Error parsing stored state:", error);
      }
    }
  }, []);

  useEffect(() => {
    console.log("SSSS", state);
    localStorage.setItem("appState", JSON.stringify(state));
  }, [state]);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppStateProvider");
  }
  return context;
};

export const updateAppState = (dispatch, newState) => {
  dispatch({ type: "UPDATE_STATE", payload: newState });
};
