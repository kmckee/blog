import React from 'react';
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

const title = ({title, large}) => {
    const siteTitleFont = `Permanent Marker, Montserrat, sans-serif`
    let header;

    if (large === true) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            fontFamily: siteTitleFont,
            fontWeight: 100,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: siteTitleFont,
            fontWeight: 100,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return header;
};

export default title;