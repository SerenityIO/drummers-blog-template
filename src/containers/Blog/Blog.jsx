import React, { Component } from 'react'
import Navbar from '../Navbar'

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render = () => {
    return (
      <div>
        <Navbar />
        Blog Page
      </div>
    )
  }
}

export default Blog
