import React from "react";
function Display(props) {
    const { countValue } = props;
    return (
        <div>
            <h1>Count: {countValue}</h1>
        </div>
    )
}
export { Display }