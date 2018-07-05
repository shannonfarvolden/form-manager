import { combineReducers } from "redux";

import { configReducer } from "./modules/formConfig";
import authReducer from "./modules/authReducer";
export default combineReducers({
  formConfig: configReducer,
  auth: authReducer
});
