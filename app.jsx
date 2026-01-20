import React, { useState } from "react";
import { Display } from "./Components/Display/display";
import { Control } from "./Components/controls/control";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    // Increment count
    const handleInc = () => {
        setCount(count + 1);
    };

    // Decrement count
    const handleDec = () => {
        setCount(count - 1);
    };

    // Reset count
    const handleRes = () => {
        setCount(0);
    };

    return (
        <div className="App">
            <Display countValue={count} />
            <Control onInc={handleInc} onDec={handleDec} onRes={handleRes} />
        </div>
    );
}

export default App;
