import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import image from "../images/1648573185082.jpg"
import "../styles/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Frontend Dev" keywords={[`gatsby`, `application`, `react`]} />
   
    <div className="image-wrap">
      <img src={image} alt="Logo" />
    </div>
    <ul className="social">
     <li><a href="https://twitter.com/aneeshyder1" target="_blank" rel="noopener noreferrer">Twitter</a></li>
     <li><a href="https://www.linkedin.com/in/anis-haider-69a90769/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
     <li><a href="https://codepen.io/AnisCharoliya/" target="_blank" rel="noopener noreferrer">Codepen</a></li>
  </ul>
  </Layout>
)

export default IndexPage
