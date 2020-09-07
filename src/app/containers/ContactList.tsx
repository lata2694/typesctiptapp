import * as React from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'

import { getContacts} from '../../store/contacts/actions'

import Icontacts from '../../models/Icontacts'
import IAppState from '../../store/app/state'

interface IcontactsListProps {
  contacts: Icontacts[]
  getContacts: typeof getContacts
}

class ContactList extends React.Component<IcontactsListProps, {}> {

  public componentDidMount() {
    this.props.getContacts()
  }

  public render() {
    const { contacts } = this.props
    return (
      <Container>
        <h1>Contact List</h1>
        {contacts.map(this.renderContactResult)}
      </Container>
    )
  }

  private renderContactResult(contact: Icontacts) {
    return (
      <Link to={`/details/${contact.id}`}>{contact.name}</Link>
    )
  }
}

function mapStateToProps(state: IAppState) {
  return {
    contacts: state.contacts.contacts,
  }
}

export default connect(
  mapStateToProps,
  { getContacts }
)(ContactList)