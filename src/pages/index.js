import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MainContent from "../components/mainContent"
import AboutMe from "../components/aboutMe"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainContent>
      <AboutMe></AboutMe>
    </MainContent>
  </Layout>
)

export default IndexPage
