import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MainContent from "../components/mainContent"
import Articles from "../components/articles"
import SEO from "../components/seo"

const ArticlesPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainContent>
      <Articles></Articles>
    </MainContent>
  </Layout>
)

export default ArticlesPage
