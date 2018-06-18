// Actions

const GET_CONFIG_BEGIN = 'GET_CONFIG_BEGIN'
const GET_CONFIG_SUCCESS = 'GET_CONFIG_SUCCESS'
const CONFIG_ERROR = 'CONFIG_ERROR'

export const getForms = () => {
  return dispatch => {
    try {
      dispatch(getFormsBegin())
      dispatch(getFormsSuccess())
    } catch(error) {
      console.log('error', error)
      dispatch(configError(error))
    }
  }
}

const getFormsBegin = () => ({
  type: GET_CONFIG_BEGIN
})

const getFormsSuccess = () => ({
  type: GET_CONFIG_SUCCESS,
  currentPageId: 'ex_w8-1-1',
  forms : {
    'ex_w8': {
      '1': {
        '1': {
          full_name: {
            defaultValue: 'John Doe',
            top: '310px',
            left: '80px',
            width: '200px',
            height: '13px'
          },
          citizenship: {
            defaultValue: 'CAN',
            top: '310px',
            left: '500px',
            width: '100px',
            height: '13px'
          },
          addr: {
            defaultValue: 'Main st',
            top: '340px',
            left: '80px',
            width: '500px',
            height: '13px'
          },
          city: {
            defaultValue: 'Vancouver',
            top: '372px',
            left: '80px',
            width: '300px',
            height: '13px'
          }     
        }
      } 
    }
  }
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