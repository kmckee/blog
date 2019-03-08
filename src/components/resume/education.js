import React from 'react';

const Experience = (props) => {
    const { title, location, degree, description } = props;
    return (
        <div>
            <h4>{title}, {location} - {degree}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Experience;