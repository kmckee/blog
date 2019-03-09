import React from "react"

import Title from './title';
import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const resumePath = `${__PATH_PREFIX__}/resume`
    const largeTitle = location.pathname === rootPath || location.pathname === resumePath;

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>
          <Title large={largeTitle} title={title} />
        </header>
        <main>{children}</main>
        <footer>
          &copy; {new Date().getFullYear()}, Kyle McKee
          Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
