import React from 'react';

const Experience = (props) => {
    const {title, position, description, footnote} = props;
    return (
        <div key={`${title}-${position}`}>
            <div style={{margin: '1em 0', fontWeight: 'bold'}}>
                {title} - {position}
            </div>
            <p>{description}</p>
            {footnote ? <p>{footnote}</p> : null}
        </div>
    );
};

export default Experience;