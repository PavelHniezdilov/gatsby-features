import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header"

class Homepage extends Component {
  render() {
    const data = this.props.data

    return (
      <div style={{
        maxWidth: 1000,
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        <Header />

        <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={node.slug}>
              <h2>{node.title}</h2>
            </Link>
            <div dangerouslySetInnerHTML={{__html: node.excerpt}} />
          </div>
        ))}
      </div>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`
