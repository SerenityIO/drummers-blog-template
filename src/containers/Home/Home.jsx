import React, { Component } from 'react'
import Input from '../../components-lib/Input'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render = () => {
    return (
      <div className='container'>
        <Input width={400} />
        Home Page
      </div>
    )
  }
}

export default Home
