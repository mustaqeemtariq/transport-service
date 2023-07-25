// AppStateContext.js
import React, { createContext, useReducer, useContext } from 'react';

// Create the context
const AppStateContext = createContext();

const appStateReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_STATE':
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };

  export const updateAppState = (dispatch, newState) => {
    dispatch({ type: 'UPDATE_STATE', payload: newState });
  };


export const AppStateProvider = ({ children }) => {
    const initialState = {
        Shipper: {
            Email: undefined,
            Phone_1: undefined
          },
          Transport: {
            Carrier: undefined,
            Origin: {
              City: undefined,
              State: undefined,
              Zipcode: undefined
            },
            Destination: {
              City: undefined,
              State: undefined,
              Zipcode: undefined
            },
            Vehicles: [
              {
                v_year: undefined,
                v_make: undefined,
                v_model: undefined,
                veh_op: undefined
              }
            ],
            Available_Date: undefined
          },
    };
  const [state, dispatch] = useReducer(appStateReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
