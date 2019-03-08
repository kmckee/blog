/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { SocialIcon } from "react-social-icons"

import { rhythm } from "../utils/typography"

function Bio() {
  const socialStyles = {boxShadow: `none`, margin: `0 .2rem`, height: 30, width: 30};
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`}}>
              <p style={{ marginBottom: 0}}>
                I'm growing software, teams, and myself in CLE.
              </p>
              <div style={{alignSelf: `flex-end`}}>
                <SocialIcon url={`https://github.com/${social.github}`} style={socialStyles} />
                <SocialIcon url={`https://www.linkedin.com/in/${social.linkedin}`} style={socialStyles} />
                <SocialIcon url={`https://twitter.com/${social.twitter}`} style={socialStyles} />
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter,
          github,
          linkedin
        }
      }
    }
  }
`

export default Bio
