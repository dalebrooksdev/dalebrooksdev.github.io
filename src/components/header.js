import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import avatar from "../images/dale_andrew_brooks_bitmoji.png" // Tell Webpack this JS file uses this image

const Header = ({ siteTitle }) => (
  <header className="w-full lg:w-2/5 p-5">
    <div className="container flex justify-center lg:justify-start items-end flex-wrap">
      <img className="rounded-full mr-4 mb-4" src={avatar}
        alt="Avatar of Andrew Brooks" style={{ maxHeight: 100 }} />
      <div className="lg:text-left text-center mb-4">
        <div className="">
          <h1 className="text-gray-900 leading-none text-2xl mb-1">Dale Andrew Brooks</h1>
          <h2 className="text-gray-700 text-lg mb-1">Full Stack Software Dev</h2>
          <div className="text-2xl mb-1">
            <a href="https://www.twitter.com/andrew_brooksie" target="_blank"
              aria-label="a link to my twitter! tweet tweet.">
              <i className="fab fa-twitter mr-2"></i>
            </a>
            <a href="https://dev.to/andrew_brooksie" target="_blank" aria-label="a link to my dev.to account.">
              <i className="fab fa-dev mr-2"></i>
            </a>
            <a href="https://github.com/dalebrooksdev" target="_blank" aria-label="a link to my github account">
              <i className="fab fa-github mr-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <ul className="flex mt-6 justify-center lg:justify-start">
      <li className="mr-6">
        <Link to="">Home</Link>
      </li>
      <li className="mr-6">
        <Link to="/projects">Projects</Link>
      </li>
      <li className="mr-6">
        <Link to="/articles">Articles</Link>
      </li>
      <li className="">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
