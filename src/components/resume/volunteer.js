import React from 'react';

const Volunteer = (props) => {
    const {title, position, description} = props;
    return (
        <div>
            <h4>{title} - {position}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Volunteer;