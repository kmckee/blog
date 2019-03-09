import React from 'react';

const Volunteer = (props) => {
    const {title, position, description} = props;
    return (
        <div>
            <div style={{margin: '1em 0', fontWeight: 'bold'}}>
                {title} - {position}
            </div>
            <p>{description}</p>
        </div>
    );
};

export default Volunteer;