import React, { Component } from "react"
import PropTypes from "prop-types"
import "../common/styles.css"

class Select extends Component {
  static defaultProps = {
    className: ""
  }

  componentDidUpdate () {
    this.props.checkFormValidity()
  }

  static PropTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    options: PropTypes.oneOfType([PropTypes.array]).isRequired,
    checkFormValidity: PropTypes.func.isRequired
  }

  state = {
    isValid: false
  }

  handleOnChange = () => {
    this.setState({ isValid: true })
  }

  render () {
    const { label, placeholder, options, className } = this.props

    return (
      <div className={`input-wrapper ${className}`}>
        <label className="input-wrapper__label">{label}</label>
        <select
          name={label}
          defaultValue={placeholder}
          className={`input-wrapper__text`}
          onChange={this.handleOnChange}
          data-valid={this.state.isValid}
        >
          <option value={placeholder} disabled hidden>
            {placeholder}
          </option>
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>

        {this.state.isValid ? (
          <i className="input-wrapper__icon icon-check-circle-o" />
        ) : (
          <i className="input-wrapper__icon icon-chevron-down" />
        )}
      </div>
    )
  }
}

export default Select
