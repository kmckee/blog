import React from 'react';

const Award = (props) => {
    const { name, date, description, url} = props;
    return (
        <div>
            <h4>{name}, {date}</h4>
            <p>{description}</p>
            <a href={url}>More info</a>
        </div>
    );
};

export default Award;