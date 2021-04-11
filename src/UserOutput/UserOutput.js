import React from 'react';

const userOutput = props => {
    return(
        <div>
            <p>{props.firstParagraph}</p>
            <p>{props.secondParagraph}</p>
        </div>
    );
}

export default userOutput;