import Icontacts from '../models/Icontacts'

const contact: Icontacts = {
  id: '1',
  name: 'Fred',
  email: 'fred@mail.com'
}

export function fetchContacts(): Promise<Icontacts[]> {
  return new Promise(resolve => {
    resolve([contact])
  })
}
export function fetchContact(id: string): Promise<Icontacts> {
  return new Promise(resolve => {
    resolve(contact)
  })
}