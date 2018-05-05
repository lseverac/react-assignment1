import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
            <div className="UserOutput">
                <p>{props.userName}'s output</p>
                <p>some content</p>
            </div>
    );
};

export default userOutput;