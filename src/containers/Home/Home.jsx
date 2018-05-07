import React, { Component } from 'react'
import NavBar from '../Navbar'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render = () => {
    return (
      <div>
        <NavBar />
        Home Page
      </div>
    )
  }
}

export default Home
