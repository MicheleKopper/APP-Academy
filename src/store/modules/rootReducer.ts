import { combineReducers } from "@reduxjs/toolkit";
import { userLoggedReducer } from "./userLogged/userLoggedSlice";

export const rootReducer = combineReducers({
  // Todos os novos estados globais criados, devem ser chamados aqui...
  userLogged: userLoggedReducer,
});
