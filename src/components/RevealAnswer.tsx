import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const toggleAnswerVisibility = () => {
        setIsAnswerVisible(prevVisibility => !prevVisibility);
    };

    return (
        <div>
            <Button onClick={toggleAnswerVisibility}>Reveal Answer</Button> 
            {isAnswerVisible && <div>42</div>} 
        </div>
    );
}