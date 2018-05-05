import React from 'react';

const userInput = (props) => {
    const labelStyle = {
        marginRight : '5px',
        fontWeight : 'bold'

    };
    const explanationStyle = {
        fontSize : '11px'
    };
    return (
            <div>
                <label style={labelStyle}>User Name</label>
                <input type="text" onChange={props.changeUserNameHandler} value={props.defaultName}/>
                <p style={explanationStyle}>Any text entered in this input field will update the first user's component</p>
            </div>
    );
};

export default userInput;