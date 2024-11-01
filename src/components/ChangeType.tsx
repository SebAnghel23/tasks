import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState("Short Answer");

    const handleChangeType = () => {
        setType(prevType => (prevType === "Short Answer" ? "Multiple Choice" : "Short Answer"));
    };

    return (
        <div>
            <div>{type}</div> 
            <Button onClick={handleChangeType}>Change Type</Button> 
        </div>
    );
}