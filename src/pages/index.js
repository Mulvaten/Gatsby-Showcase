import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="What is Gatsby?">
      <p>Gatsby is, put simply, a JavaScript framework. A framework can be thought of as a set of tools that allow us to complex applications with much greater ease than would otherwise be possible.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="What is Gatsby?" />

export default IndexPage