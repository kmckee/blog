import React from 'react';

const Experience = (props) => {
    const { title, degree, description } = props;
    return (
        <div>
            <div style={{margin: '1em 0', fontWeight: 'bold'}}>
                {title} - {degree}
            </div>
            <p>{description}</p>
        </div>
    );
};

export default Experience;