import React from "react"
import ReactDOM from "react-dom"
import Title from "../"

//Just an example of checking if compoenent is rendered
//correctly, also we can test to render the component
//with diferent parameters in order to control it own
//state.

it("Check if the component is correctly rendered", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Title />, div)
})
