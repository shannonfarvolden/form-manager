import fileHelper from './helpers/helper-file';

// Actions

const GET_CONFIG_BEGIN = 'GET_CONFIG_BEGIN';
const GET_CONFIG_SUCCESS = 'GET_CONFIG_SUCCESS';
const SAVE_CONFIG = 'SAVE_CONFIG';
const RESET_CONFIG = 'RESET_CONFIG';
const CONFIG_ERROR = 'CONFIG_ERROR';

export const getForms = () => {
  return dispatch => {
    try {
      dispatch(getFormsBegin());
      dispatch(getFormsSuccess());
    } catch(error) {
      console.log('error', error);
      dispatch(configError(error));
    }
  }
}

const getFormsBegin = () => ({
  type: GET_CONFIG_BEGIN
})

const getFormsSuccess = () => ({
  type: GET_CONFIG_SUCCESS,
  currentPageId: 'ex_w8-1-1',
  forms: fileHelper.resetConfig()
})

export const saveConfig = () => {
  return {
    type: SAVE_CONFIG,
    message: 'Config saved'
  }
} 

export const resetConfig = () => ({
  type: RESET_CONFIG,
  forms: fileHelper.getResetConfig
})

const configError = (error) => ({
  type: CONFIG_ERROR,
  error
})

// Reducers

const initialState = {
  currentPageId: '',
  forms: {},
  config: {},
  error: null,
  isLoading: true
}

export const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONFIG_BEGIN':
    return {
      ...state,
      forms: {},
      isLoading: true
      }
      case 'GET_CONFIG_SUCCESS':
      return {
        ...state,
        currentPageId: action.currentPageId,
        forms: action.forms,
        isLoading: false
        }
    case 'SAVE_CONFIG':
      fileHelper.saveConfigTest({ forms: state.forms });
      return {
        ...state,
        message: action.message
      }
    case 'CONFIG_ERROR':
      return {
        ...state,
        error: action.error,
        isLoading: false
        }
    default:
      return state
  }
}