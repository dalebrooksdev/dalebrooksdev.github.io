import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MainContent from "../components/mainContent"
import Projects from "../components/projects"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainContent>
      <Projects></Projects>
    </MainContent>
  </Layout>
)

export default ProjectsPage
