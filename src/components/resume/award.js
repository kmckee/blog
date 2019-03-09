import React from 'react';

const Award = (props) => {
    const { name, date, description, url} = props;
    return (
        <div>
            <div style={{margin: '1em 0', fontWeight: 'bold'}}>
                {name}, {date}
            </div>
            <p>
                {description}
                &nbsp;
                <a href={url}>More info</a>
            </p>
            
        </div>
    );
};

export default Award;