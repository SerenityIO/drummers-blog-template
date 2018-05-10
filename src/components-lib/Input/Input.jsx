import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import './Input.scss'

let debounceTimer = null

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  handleChange = ({ target }) => {
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
      this.setState({
        value: target.value
      })
    }, this.props.debounceTime)
  }

  render = () => {
    const { placeholder, width, height, borderRadius, background } = this.props

    return (
      <Fragment>
        <input
          className='DrumInput'
          onChange={this.handleChange}
          type='text'
          placeholder={placeholder}
          style={{
            width,
            height,
            borderRadius,
            background
          }}
        />
      </Fragment>
    )
  }
}

Input.defaultProps  = {
  placeholder: 'Message',
  width: null,
  height: null,
  borderRadius: null,
  background: '',
  debounceTime: 300
}

Input.propTypes = {
  placeholder: PropTypes.string,
  background: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  borderRadius: PropTypes.number,
  onChange: PropTypes.func,
  debounceTime: PropTypes.number
}


export default Input
