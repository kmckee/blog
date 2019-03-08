import React from 'react';

const Experience = (props) => {
    const {title, location, position, description, footnote} = props;
    return (
        <div key={`${title}-${position}`}>
            <h4>{title}, {location} - {position}</h4>
            <p>{description}</p>
            {footnote ? <p>{footnote}</p> : null}
        </div>
    );
};

export default Experience;