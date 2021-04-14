import { combineReducers } from "redux";
import { authentication } from "./authentication/index"

export const rootReducer = combineReducers({
  authentication
});