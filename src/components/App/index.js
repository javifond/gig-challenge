import React from "react"
import Title from "../Title"
import Form from "../Form"

import "./styles.css"

function App () {
  return (
    <main className="app-container">
      <section className="form-container">
        <Title />
        <Form />
        <p>You will then confirm your deposit</p>
      </section>
    </main>
  )
}

export default App
