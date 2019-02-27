import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Frontend Dev" keywords={[`gatsby`, `application`, `react`]} />
   
    <div style={{ maxWidth: `300px`, margin: `80px auto`,    borderRadius: '50%',
    border: '6px solid #0c2d65',
    overflow: 'hidden', }}>
      <Image />
    </div>
    <ul className="social">
     <li><a href="https://twitter.com/aneeshyder1" target="_blank" rel="noopener noreferrer">Twitter</a></li>
     <li><a href="https://www.linkedin.com/in/anis-haider-69a90769/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
     <li><a href="https://codepen.io/AnisCharoliya/" target="_blank" rel="noopener noreferrer">Codepen</a></li>
  </ul>
  </Layout>
)

export default IndexPage
