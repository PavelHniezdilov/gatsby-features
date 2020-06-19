import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Image = ({ filename, type, alt, sizes, width, className }) => {
  const images = useStaticQuery(graphql`
    query ImageQuery {
      data: allFile {
        edges {
          node {
            relativePath
            default: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            square: childImageSharp {
              fluid(maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const image = images.data.edges.find(n => {
    return n.node.relativePath.includes(filename)
  })

  if (!image) {
    return null
  }

  return (
    <Img
      alt={alt}
      fluid={{
        ...image.node[type].fluid,
        sizes: sizes,
      }}
      style={{ width: `${width}px` }}
      className={className}
    />
  )
}

Image.defaultProps = {
  wrapper: "",
  type: "default",
  sizes: "(max-width: 400px) 100px, (max-width: 800px) 200px, 400px",
}

Image.propTypes = {
  filename: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  type: PropTypes.string,
  sizes: PropTypes.string,
  width: PropTypes.number,
  className: PropTypes.string,
}

export default Image
