import React from 'react';

const userInput = props => {
    return (<div>
            <label>Input:</label>
            <input type='text'
            onBlur={props.blur} />
        </div>);
}

export default userInput;