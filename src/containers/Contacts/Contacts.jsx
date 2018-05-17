import React, { Component } from 'react'
import Form from '../../components/ContactsForm'
import './contacts.scss'

class Contacts extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render = () => {
    return (
      <div>
        <Form />

      </div>
    )
  }
}

export default Contacts
