import React, { Component } from 'react'
import Form from '../../components/ContactsForm'
import './contacts.scss'
import Navbar from '../Navbar'

class Contacts extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render = () => {
    return (
      <div>
        <Navbar />
        <Form/>
      </div>
    )
  }
}

export default Contacts
