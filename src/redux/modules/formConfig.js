// Actions

const GET_CONFIG_BEGIN = 'GET_CONFIG_BEGIN'
const GET_CONFIG_SUCCESS = 'GET_CONFIG_SUCCESS'
const CONFIG_ERROR = 'CONFIG_ERROR'

export const getConfig = () => {
  return dispatch => {
    try {
      dispatch(getConfigBegin())
      dispatch(getConfigSuccess({message: 'Best team ever!!!!'})) // later this will be async reading
    } catch(error) {
      console.log('error', error)
      dispatch(configError(error))
    }
  }
}

const getConfigBegin = () => ({
  type: GET_CONFIG_BEGIN
})

const getConfigSuccess = (data) => ({
  type: GET_CONFIG_SUCCESS,
  data
})

const configError = (error) => ({
  type: CONFIG_ERROR,
  error
})

// Reducers

const initialState = {
  config: {},
  error: null,
  isLoading: false
}

export const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONFIG_BEGIN':
    return {
      ...state,
      list: [],
      isLoading: true
      }
      case 'GET_CONFIG_SUCCESS':
      return {
        ...state,
        config: action.data,
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