import { combineReducers } from "redux";
import { authentication } from "./authentication/index";
import { plan } from "./reducers_subscription";
import { accounts } from "./reducers_users";
import { video } from "./reducers_videos";

export const rootReducer = combineReducers({
  authentication,
  plan,
  accounts,
  video,
});