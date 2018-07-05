import axios from "axios";
import fileHelper from "./helpers/helper-file";
import restHelper from "./helpers/helper-rest";

// Actions

const DIALOG_OPEN = "DIALOG_OPEN";
const DIALOG_CANCEL = "DIALOG_CANCEL";
const DIALOG_CONFIRM = "DIALOG_CONFIRM";
const GET_CONFIG_BEGIN = "GET_CONFIG_BEGIN";
const GET_CONFIG_SUCCESS = "GET_CONFIG_SUCCESS";
const EXPORT_CONFIG = "EXPORT_CONFIG";
const CONFIG_RESET = "CONFIG_RESET";
const CONFIG_ERROR = "CONFIG_ERROR";
const CONFIG_MESSAGE = "CONFIG_MESSAGE";
const TEST_CONFIG = "TEST_CONFIG";
const UPD_VALUE = "UPD_VALUE";
const SET_CONFIG_NAME = "SET_CONFIG_NAME";
const FETCH_FORMS = "FETCH_FORMS";

export const loadConfig = id => async dispatch => {
  try {
    const res = await axios.get("/api/forms/" + id);
    dispatch(getFormsSuccess(res.data.config));
    console.log("load success");
  } catch (e) {
    console.log(e);
  }
};

export const saveConfig = ({ title, config }) => async dispatch => {
  try {
    const res = await axios.post("/api/forms", {
      title,
      config
    });
    console.log("save success");
  } catch (e) {
    console.log(e);
  }
};

export const fetchForms = () => async dispatch => {
  try {
    const res = await axios.get("/api/forms");
    console.log("fetch success");
    dispatch({ type: FETCH_FORMS, formList: res.data });
  } catch (e) {
    console.log(e);
  }
};

export const setConfigName = configName => ({
  type: SET_CONFIG_NAME,
  configName
});

const getFormsBegin = () => ({
  type: GET_CONFIG_BEGIN
});

const getFormsSuccess = data => {
  return {
    type: GET_CONFIG_SUCCESS,
    currentPageId: "ex_w8-1-1",
    forms: data
  };
};

// reset

export const resetConfig = () => {
  const data = fileHelper.resetConfig();
  return {
    type: CONFIG_RESET,
    forms: { ...data }
  };
};

//change value

export const changeValue = e => {
  console.log("e.target.id", e.target.id);
  return {
    type: UPD_VALUE,
    id: e.target.id,
    value: e.target.value
  };
};

// dialog

export const dialogOpen = selectedFieldId => ({
  type: DIALOG_OPEN,
  selectedFieldId
});

export const dialogCancel = () => ({
  type: DIALOG_CANCEL
});

export const dialogConfirm = newField => {
  console.log("in redux, newField=", newField);
  return {
    type: DIALOG_CONFIRM,
    newField
  };
};

export const exportConfig = () => {
  return {
    type: EXPORT_CONFIG,
    message: "Config exported"
  };
};

export const testConfig = () => ({
  type: TEST_CONFIG,
  message: "Test config"
});

const configError = error => ({
  type: CONFIG_ERROR,
  error
});

const configMessage = message => ({
  type: CONFIG_MESSAGE,
  message
});

// Reducers

const initialState = {
  currentPageId: "",
  selectedFieldId: null,
  forms: {},
  error: null,
  isLoading: true,
  message: "",
  configName: "Config " + Date.now(),
  formList: []
};

export const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPD_VALUE":
      let forms = { ...state.forms };
      const idArr1 = action.id.split("-");
      console.log("idArr1", idArr1);
      forms[idArr1[0]][idArr1[1]][idArr1[2]][
        idArr1[3]
      ].value = action.value.trim();
      return {
        ...state,
        forms: { ...state.forms }
      };
    case "DIALOG_OPEN":
      return {
        ...state,
        selectedFieldId: action.selectedFieldId
      };
    case "DIALOG_CANCEL":
      return {
        ...state,
        selectedFieldId: null
      };
    case "DIALOG_CONFIRM":
      const idArr = state.currentPageId.split("-");
      const newForms = { ...state.forms };
      newForms[idArr[0]][idArr[1]][idArr[2]][state.selectedFieldId] =
        action.newField;
      return {
        ...state,
        forms: newForms,
        selectedFieldId: null
      };
    case "GET_CONFIG_BEGIN":
      return {
        ...state,
        forms: {},
        isLoading: true
      };
    case "GET_CONFIG_SUCCESS":
      return {
        ...state,
        currentPageId: action.currentPageId,
        forms: action.forms,
        isLoading: false
      };
    case "EXPORT_CONFIG":
      fileHelper.saveConfigTest({ forms: state.forms });
      console.log("config exported");
      return {
        ...state,
        message: action.message
      };
    case "CONFIG_RESET":
      const data = fileHelper.resetConfig();
      return {
        ...state,
        error: null,
        isLoading: false,
        forms: data,
        currentPageId: "ex_w8-1-1",
        selectedFieldId: null
      };
    case "CONFIG_ERROR":
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    case "CONFIG_MESSAGE":
      return {
        ...state,
        error: null,
        message: action.message
      };
    case "TEST_CONFIG":
      const msg = fileHelper.testConfig({ forms: state.forms });

      return {
        ...state,
        error: msg
      };
    case "SET_CONFIG_NAME":
      console.log("hit form name");
      return {
        ...state,
        configName: action.configName
      };
    case "FETCH_FORMS":
      return {
        ...state,
        formList: action.formList
      };

    default:
      return state;
  }
};
