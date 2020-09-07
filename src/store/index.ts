import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import thunk from 'redux-thunk'

import contactsReducer from './contacts/reducer'
import IAppState from './app/state'

const rootStore = combineReducers({
  contacts: contactsReducer,
})
export function createAppStore(): Store<IAppState> { // returns a store that manages IAppState
  return applyMiddleware(thunk)(createStore)(rootStore)
}