import React from 'react';
import { SocialIcon } from "react-social-icons";
import { StaticQuery, graphql } from "gatsby"

const Social = () => {
    const style = {boxShadow: `none`, margin: `0 .2rem`, height: 30, width: 30};
    return (
        <StaticQuery
        query={socialQuery}
        render={data => {
            const {github, linkedin, twitter} = data.site.siteMetadata.social;
            return (
                <>
                    <SocialIcon url={`https://github.com/${github}`} style={style} />
                    <SocialIcon url={`https://www.linkedin.com/in/${linkedin}`} style={style} />
                    <SocialIcon url={`https://twitter.com/${twitter}`} style={style} />
                </>
            );
        }} />
    );
};

const socialQuery = graphql`
  query SocialQuery {
    site {
      siteMetadata {
        social {
          twitter,
          github,
          linkedin
        }
      }
    }
  }
`

export default Social;