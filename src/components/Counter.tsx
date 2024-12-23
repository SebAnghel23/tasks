import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);

    const addOne = () => {
        setValue(prevValue => prevValue + 1);
    };

    return (
        <div>
            <Button onClick={addOne}>Add One</Button> 
            <span> to {value}.</span> 
        </div>
    );
}