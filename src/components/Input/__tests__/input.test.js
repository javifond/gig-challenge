import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Input from "../../Input"

Enzyme.configure({ adapter: new Adapter() })

describe("Checking input validation", () => {
  it("should be valid", () => {
    const wrapper = shallow(<Input />)
    const input = wrapper.find("input")

    input.simulate("change", { target: { value: "JaviTheLazy" } })

    expect(wrapper.state().isValid).toBe(true)
  })
  it("should be not valid", () => {
    const wrapper = shallow(<Input />)
    const input = wrapper.find("input")

    input.simulate("change", { target: { value: "JaviTheLazy" } })
    input.simulate("change", { target: { value: "" } })

    expect(wrapper.state().isValid).toBe(false)
  })
})
