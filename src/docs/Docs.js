import React from "react"
import { injectGlobal } from "styled-components"

import Navigation from "./Navigation"
import ComponentPage from "./ComponentPage"
import componentData from "../../config/componentData"

injectGlobal`
  body {
    font-family: 'Fira Sans', sans-serif;
  }
`

class Docs extends React.Component {
  state = {
    route: window.location.hash.substr(1),
  }

  componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.setState({ route: window.location.hash.substr(1) })
    })
  }

  render() {
    const { route } = this.state
    const component = route
      ? componentData.filter(component => component.name === route)[0]
      : componentData[0]

    return (
      <section className="container">
        <Navigation components={componentData.map(component => component.name)} />
        <ComponentPage component={component} />
      </section>
    )
  }
}

export default Docs
