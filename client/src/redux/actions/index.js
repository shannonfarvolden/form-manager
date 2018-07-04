import axios from "axios";
import { FETCH_USER, FETCH_FORMS } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const saveForm = values => async dispatch => {
  console.log("hit values 1", values);
  const res = await axios.post("/api/forms", values);
  console.log("hit values 2", values);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchForms = () => async dispatch => {
  const res = await axios.get("/api/forms");
  console.log("hit fetch forms");
  dispatch({ type: FETCH_FORMS, payload: res.data });
};
