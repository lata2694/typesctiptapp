import Icontacts from '../../models/Icontacts'

export default interface IContactsState {
  contacts: Icontacts[] // array of objects of Icontacts type
  currentContact: Icontacts | null
}