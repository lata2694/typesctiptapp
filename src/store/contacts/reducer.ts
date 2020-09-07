import { Reducer } from 'redux'

import IContactsState from './state'
import { actionTypes } from './type'
import { Action } from './actions'

const defaultState: IContactsState = {
  contacts: [],
  currentContact: null,
}

const contactsReducer: Reducer<IContactsState> = (
  state: IContactsState = defaultState,
  action: Action
) => {
  switch (action.type) {
    case actionTypes.LOAD_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      }
    case actionTypes.LOAD_CONTACT:
      return {
        ...state,
        currentContact: action.payload,
      }
    case actionTypes.CLEAR_CURRENT_CONTACT:
      return {
        ...state,
        currentContact: null,
      }
    default:
      return state
  }
}
export default contactsReducer