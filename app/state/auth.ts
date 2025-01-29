import { createContext } from "react";
import { AuthActions, AuthState } from "./types";

export function authReducer(state: AuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case "LOGIN":
      return { ...state, loggedInState: "logged-in" };
    case "LOGOUT":
      return { ...state, loggedInState: "logged-out" };
    default:
      return state;
  }
}

export const initialAuthState: AuthState = {
  loggedInState: "logged-out"
}

export const AuthContext = createContext(null);
export const TasksDispatchContext = createContext(null);
