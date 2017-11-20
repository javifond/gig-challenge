import React from "react"
import PropTypes from "prop-types"
import "../../assets/styles/components/button.css"

function SubmitBtn (props) {
  const { text, isValid } = props

  return [
    <button key="submit" type="submit" disabled={!isValid} className="btn btn--primary btn--half-for-bp-m">
      {text}
    </button>
  ]
}

SubmitBtn.propTypes = {
  text: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired
}

export default SubmitBtn
