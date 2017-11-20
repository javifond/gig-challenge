import React from "react"

import "./styles.css"

function GenderSelection () {
  return (
    <div className="gender">
      <label htmlFor="male" className="gender__item">
        <input type="radio" name="gender" defaultChecked id="male" value="male" />
        male
      </label>

      <label htmlFor="female" className="gender__item">
        <input type="radio" name="gender" id="female" value="female" />
        female
      </label>
    </div>
  )
}

export default GenderSelection
