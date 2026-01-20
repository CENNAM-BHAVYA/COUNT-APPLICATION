import React from "react";

function Control(props) {
    const { onInc, onDec, onRes } = props;

    return (
        <div>
            <button onClick={onInc}>Increase</button>
            <button onClick={onDec}>Decrease</button>
            <button onClick={onRes}>Reset</button>
        </div>
    );
}

export { Control };
