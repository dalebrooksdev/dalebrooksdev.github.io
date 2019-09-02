import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MainContent from "../components/mainContent"
import Contact from "../components/contact"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainContent>
      <Contact></Contact>
    </MainContent>
  </Layout>
)

export default ContactPage
