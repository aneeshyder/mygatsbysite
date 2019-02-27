import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/contact.css"

const contactus = () => (
  <Layout>
    <SEO title="Contactus" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Contact Us</h1>    
    <p>We are here for you always</p>
   
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default contactus
