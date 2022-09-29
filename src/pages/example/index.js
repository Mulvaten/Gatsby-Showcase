import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const ExamplePage = ({data}) => {
    return (
        <Layout pageTitle="Gatsby features">
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/example/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>{node.excerpt}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query{
        allMdx(sort: {fields: frontmatter___date, order: ASC}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    slug
                }
                id
                excerpt
            }
        }
    }
`

export const Head = () => <Seo title="Gatsby features" />

export default ExamplePage