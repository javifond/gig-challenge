import React, { Component } from "react"
import PropTypes from "prop-types"
import "../common/styles.css"

class Input extends Component {
  static defaultProps = {
    className: ""
  }

  componentDidUpdate () {
    this.props.checkFormValidity()
  }

  state = {
    isValid: false,
    error: false
  }

  handleOnBlur = e => {
    if (!e.target.value) {
      this.setState({
        error: true,
        isValid: false
      })
    } else {
      this.setState({
        error: false,
        isValid: true
      })
    }
  }

  handleOnChange = e => {
    if (!e.target.value) {
      this.setState({
        error: true,
        isValid: false
      })
    } else {
      this.setState({
        error: false,
        isValid: true
      })
    }
  }

  static PropTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    checkFormValidity: PropTypes.func.isRequired
  }

  render () {
    const { type, label, placeholder, className } = this.props

    const error = this.state.error ? "input-wrapper__text--error" : ""

    return (
      <div className={`input-wrapper ${className}`}>
        <label className="input-wrapper__label">{label}</label>

        <input
          type={type}
          placeholder={placeholder}
          className={`input-wrapper__text ${error}`}
          onBlur={this.handleOnBlur}
          onChange={this.handleOnChange}
          data-valid={this.state.isValid}
        />

        {this.state.isValid && <i className="input-wrapper__icon icon-check-circle-o" />}
      </div>
    )
  }
}

export default Input
