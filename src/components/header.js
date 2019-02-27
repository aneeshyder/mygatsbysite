import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="res"
      style={{
        margin: `0 auto`,
        maxWidth: 960,        
      }}
    >
      <h1 style={{ margin: 0,display:`inline-block`,}}>        
          {siteTitle}        
      </h1>      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
