import { combineReducers } from 'redux'

import { configReducer } from './modules/formConfig'

export default combineReducers({
  formConfig: configReducer
  // Later will add at least router
})
