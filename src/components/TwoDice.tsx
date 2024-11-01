import React, { useState } from "react"; 
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(d6());  
    const [rightDie, setRightDie] = useState<number>(d6()); 
    const [message, setMessage] = useState<string | null>(null); 

    const rollLeft = () => {
        const newLeft = d6();
        setLeftDie(newLeft);
        checkGameState(newLeft, rightDie);
    };

    const rollRight = () => {
        const newRight = d6();
        setRightDie(newRight);
        checkGameState(leftDie, newRight);
    };

    const checkGameState = (left: number, right: number) => {
        if (left === 1 && right === 1) {
            setMessage("Lose"); 
        } else if (left === right) {
            setMessage("Win");
        } else {
            setMessage(null); 
        }
    };

    return (
        <div>
            <div data-testid="left-die">{leftDie}</div> 
            <div data-testid="right-die">{rightDie}</div> 
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button> 
            {message && <div>{message}</div>} 
        </div>
    );
}