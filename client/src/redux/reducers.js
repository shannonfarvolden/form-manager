import { combineReducers } from "redux";

import { configReducer } from "./modules/formConfig";
import authReducer from "./modules/authReducer";
export default combineReducers({
  formConfig: configReducer,
  // Later will add at least router
  auth: authReducer
});
