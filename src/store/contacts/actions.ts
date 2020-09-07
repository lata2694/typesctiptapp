import { fetchContacts, fetchContact } from '../../api/contacts'
import Icontacts from '../../models/Icontacts'

import { actionTypes } from './type'

// Actions interfaces
interface ILoadContactsAction {
  type: typeof actionTypes.LOAD_CONTACTS
  payload: Icontacts[]
}

interface ILoadContactAction {
  type: typeof actionTypes.LOAD_CONTACT
  payload: Icontacts
}

interface IClearContactAction {
  type: typeof actionTypes.CLEAR_CURRENT_CONTACT
}

// thunk action needs type information too
type PromiseAction = Promise<ILoadContactsAction>
// Redux-Thunk can provide a type definition for ThunkAction
type ThunkAction = (dispatch: Dispatch) => any 
// dispatch params can contain different types of actions, and also tell it what a Thunk action is.
type Dispatch = (action:
  ILoadContactsAction | 
  ILoadContactAction |
  IClearContactAction |
  ThunkAction | 
  PromiseAction 
) => any

// ------------------------------------------

function createLoadContactsAction(contacts: Icontacts[]): ILoadContactsAction { // takes Icontacts type array as param; returns ILoadContactsAction type
  return {
    payload: contacts,
    type: actionTypes.LOAD_CONTACTS,
  }
}

function createLoadContactAction(contact: Icontacts): ILoadContactAction {
  return {
    payload: contact,
    type: actionTypes.LOAD_CONTACT,
  }
}

export function clearCurrentContact(): IClearContactAction {
  return {
    type: actionTypes.CLEAR_CURRENT_CONTACT,
  }
}

// Thunk Actions
export function getContacts(): ThunkAction {
  return(dispatch) => {
    fetchContacts()
    .then((contacts: Icontacts[])=> {
      dispatch(createLoadContactsAction(contacts))
    })
    .catch()
  }
}

export function getContact(id: string): ThunkAction {
  return (dispatch: Dispatch) => {
    fetchContact(id)
    .then((contact: Icontacts) => {
      dispatch(createLoadContactAction(contact))
    })
    .catch()
  }
}

export type Action = ILoadContactsAction | ILoadContactAction | IClearContactAction