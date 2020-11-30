import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Heading from "../components/heading"
import Layout from "../layouts/layout"
// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
        <Layout>
          <Helmet title={title} />
        <div>
            <div>
                <Heading color="dark" alignment="center">Todos los Tags</Heading>
                <ul>
                    {group.map(tag => (
                        <li key={tag.fieldValue}>
                            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                               <h3>{tag.fieldValue} ({tag.totalCount})</h3> 
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </Layout>
    )

TagsPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            group: PropTypes.arrayOf(
                PropTypes.shape({
                    fieldValue: PropTypes.string.isRequired,
                    totalCount: PropTypes.number.isRequired,
                }).isRequired
            ),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }),
        }),
    }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`