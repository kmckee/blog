import React from 'react';

const EmphasizedList = (props) => {
    const {items} = props;
    const mapped = items.map(i => {
        const style = i.isPrimary ? { fontWeight: 'bold' } : {};
        return <li style={style} key={i.name}>{i.name}</li>;
    })
    return (
        <ol>
            {mapped}
        </ol>
    );
};

export default EmphasizedList;