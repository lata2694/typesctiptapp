import * as React from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'

import { clearCurrentContact, getContact } from '../../store/contacts/actions'

import Icontacts from '../../models/Icontacts'
import IAppState from '../../store/app/state'

interface IcontactsDetailsProps {
  contact: Icontacts | null
  getContact: typeof getContact
  clearCurrentContact: typeof clearCurrentContact
  match: any
}

class ContactDetails extends React.Component<IcontactsDetailsProps, object> {

  public componentDidMount() {
    const contactId = this.props.match.params.contactId // route param
    this.props.getContact(contactId)
  }

  public componentWillUnmount() {
    this.props.clearCurrentContact()
  }
  
  public render() {
    if (!this.props.contact) {
      return null
    }

    const contact = this.props.contact
    return (
      <Container>
        <h1>Contact Details: {contact.name}</h1>
        <dl>
          <dt>email</dt>
          <dd>{contact.email}</dd>
        </dl>
      </Container>
    )
  }
}

function mapStateToProps(state: IAppState) {
  return {
    contact: state.contacts.currentContact,
  }
}

export default connect(
  mapStateToProps,
  { getContact, clearCurrentContact }
)(ContactDetails)