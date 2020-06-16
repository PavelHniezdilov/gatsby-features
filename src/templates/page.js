import React, { Component } from "react"
import { graphql } from "gatsby"
import Header from "../components/header"

class Page extends Component {
  render() {
    // const StaticPage = this.props.data.wordpressPage

    return (
      <div style={{
        maxWidth: 1000,
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        <Header />
        {/*<h1>{StaticPage.title}</h1>*/}
        {/*<div dangerouslySetInnerHTML={{__html: StaticPage.content}} />*/}
      </div>
    )
  }
}

export default Page

// export const pageQuery = graphql`
//   query($id: String!) {
//     wordpressPage(id: { eq: $id }) {
//       title
//       content
//     }
//     site {
//       id
//       siteMetadata {
//         title
//         description
//       }
//     }
//   }
// `
