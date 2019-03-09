import React from 'react';
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Social from './social';

const title = ({title, large}) => {
    const siteTitleFont = `Permanent Marker, Montserrat, sans-serif`
    let header;
    const nav = (
      <span style={{display: 'flex', alignItems: 'center',}}>
        <Link to={`/resume`} style={{fontSize: '.8rem', textDecoration: 'none', boxShadow: 'none', marginRight: '.45em'}}>Resume</Link>
        <Social />
      </span>
    );
    if (large === true) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              fontFamily: siteTitleFont,
              fontWeight: 100,
            }}
            to={`/`}
          >
            {title}
          </Link>
          {nav}
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
              fontFamily: siteTitleFont,
              fontWeight: 100,
            }}
            to={`/`}
          >
            {title}
          </Link>
          {nav}
        
        </h3>
      )
    }
    return header;
};

export default title;