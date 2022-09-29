import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const InfoPage = () => {
    return (
        <Layout pageTitle="Why Gatsby?">
            <p>So why do we use frameworks? It comes down to ease of use. Frameworks give us tools and building blocks that greatly simplify what would otherwise be a much more involved process of developing complex applications.</p>
        </Layout>
    )
}

export const Head = () => <Seo title="Why Gatsby?" />

export default InfoPage