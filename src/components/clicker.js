import React from 'react';

const Clicker = (props) => {
    return(
        <div>
            <button onClick={props.clickFn}>Code {props.click_power} lines of code</button>
        </div>
    )
}

export default Clicker;