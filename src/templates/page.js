import React, { Component } from "react"
import { graphql } from "gatsby"
import Header from "../components/header"

class Page extends Component {
  render() {
    return (
      <div style={{
        maxWidth: 1000,
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        <Header />
      </div>
    )
  }
}

export default Page
