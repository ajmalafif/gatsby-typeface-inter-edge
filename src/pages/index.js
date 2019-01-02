import React from 'react'
import { Link } from 'gatsby'
import tachyons from 'tachyons-components'
import Layout from '../components/layout'

const Heading1 = tachyons('h1')`
  f1 underline fw1
`

const Italic = tachyons('p')`
  f2 i fw2
`

const Strong = tachyons('p')`
  f2 fw6
`

const IndexPage = () => (
  <Layout>
    <Heading1>Hi people</Heading1>
    <Italic>Italic</Italic>
    <Strong>Strong</Strong>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
