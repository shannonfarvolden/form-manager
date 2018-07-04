import fileHelper from "./helpers/helper-file";
import restHelper from "./helpers/helper-rest";
import { FETCH_FORMS } from "../actions/types";

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

// rest (not implemented)

export const loadConfig = () => {
  return dispatch => {
    // dispatch(saveForm());
    console.log("will load config");
  };
  // return dispatch => {
  //   try {
  //     dispatch(getFormsBegin());
  //     fetch(
  //       'http://path',
  //       {
  //         method: 'get',
  //         headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  //         }
  //       }
  //     )
  //     .then(res => res.json())
  //     .then(json => dispatch(getFormsSuccess(json)))
  //     .catch(err => { throw err })
  //   } catch(error) {
  //     console.log('error', error);
  //     dispatch(configError(error));
  //   }
  // }
};

export const saveConfig = () => {
  return dispatch => {
    console.log("saveConfig");
    // dispatch(saveForm());
  };
  // return dispatch => {
  //   try {
  //     dispatch(getFormsBegin());
  //     fetch("http://path", {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  //       },
  //       mode: "cors",
  //       body: JSON.stringify("forms")
  //     })
  //       .then(res => res.json())
  //       .then(json => dispatch(configMessage("saved")))
  //       .catch(err => {
  //         throw err;
  //       });
  //   } catch (error) {
  //     console.log("error", error);
  //     dispatch(configError(error));
  //   }
  // };
};

const getFormsBegin = () => ({
  type: GET_CONFIG_BEGIN
});

const getFormsSuccess = data => ({
  type: GET_CONFIG_SUCCESS,
  currentPageId: "ex_w8-1-1",
  forms: fileHelper.resetConfig()
});

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
  message: ""
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
      console.log("config got");
      return {
        ...state,
        currentPageId: action.currentPageId,
        forms: { ...action.forms },
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
    case FETCH_FORMS:
      console.log("hit fetch forms action type");
      return action.payload;
    default:
      return state;
  }
};
