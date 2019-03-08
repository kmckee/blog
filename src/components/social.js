import React from 'react';
import { SocialIcon } from "react-social-icons";

const Social = (props) => {
    const style = {boxShadow: `none`, margin: `0 .2rem`, height: 30, width: 30};
    const { github, linkedin, twitter } = props;
    return (
        <>
            <SocialIcon url={`https://github.com/${github}`} style={style} />
            <SocialIcon url={`https://www.linkedin.com/in/${linkedin}`} style={style} />
            <SocialIcon url={`https://twitter.com/${twitter}`} style={style} />
        </>
    );
};

export default Social;