import React, { Component } from "react"
import ReactDOM from "react-dom"
import Input from "../Input"
import Select from "../Select"
import GenderSelection from "../GenderSelection"
import SubmitBtn from "../SubmitBtn"

import "./styles.css"

class Form extends Component {
  componentDidMount () {
    this.form = ReactDOM.findDOMNode(this)
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextState.isValid !== this.state.isValid
  }

  checkFormValidity = () => {
    const els = this.form.querySelectorAll("[data-valid]")
    let elAttrValues = []

    els.forEach(function (el) {
      elAttrValues.push(el.dataset.valid)
    })

    let areAllFieldsValid = elAttrValues.every(el => el === "true")

    this.setState({ isValid: areAllFieldsValid })
  }

  state = {
    isValid: false
  }

  render () {
    return (
      <form className="registration">
        <div className="registration__col">
          <div className="field-group">
            <Input
              type="text"
              label="first name"
              placeholder="first name"
              className="field-group__item"
              checkFormValidity={this.checkFormValidity}
            />

            <Input
              type="text"
              label="last name"
              placeholder="last name"
              className="field-group__item"
              checkFormValidity={this.checkFormValidity}
            />
          </div>

          <div className="field-group">
            <Input
              type="date"
              label="date of birthday"
              placeholder="DD/MM/YYYY"
              className="field-group__item"
              checkFormValidity={this.checkFormValidity}
            />

            <GenderSelection />
          </div>

          <Input type="text" label="address" placeholder="address" checkFormValidity={this.checkFormValidity} />
        </div>

        <div className="registration__col">
          <div className="field-group">
            <Input
              type="text"
              label="postcode"
              placeholder="postcode"
              className="field-group__item"
              checkFormValidity={this.checkFormValidity}
            />

            <Input
              type="text"
              label="city"
              placeholder="city"
              className="field-group__item"
              checkFormValidity={this.checkFormValidity}
            />
          </div>

          <Select
            label="country"
            placeholder="country"
            options={["Spain", "Sweden", "United States"]}
            checkFormValidity={this.checkFormValidity}
          />

          <div className="field-group">
            <Select
              label="country code"
              placeholder="code"
              options={["+34", "+49", "+1"]}
              className="field-group__item"
              checkFormValidity={this.checkFormValidity}
            />

            <Input
              type="number"
              label="phone number"
              placeholder="phone number"
              className="field-group__item"
              checkFormValidity={this.checkFormValidity}
            />
          </div>
        </div>

        <SubmitBtn text="complete registration" isValid={this.state.isValid} />
      </form>
    )
  }
}

export default Form
