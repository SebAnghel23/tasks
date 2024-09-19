import React from "react";
import "./App.css";

function App(): React.JSX.Element {

     const handleClick = () => {
        console.log("Hello World!");
    };

    return (
        <div className="App">
            <div className="App-banner" role="banner">
                Stock Market Ticker Goes Here
            </div>
            {/* Header section */}
            <header className="App-header" role="heading">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>Hello World! by Sebastian Anghel</p>

            {/* image loaded in */}
            <img src="../assets/images/pet-ada.jpg" alt="A picture of my dog Ada" />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            {/* List with 3 elements */}
            <ul role="list">
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ul>

            {/* Bootstrap Button */}
            <button className="btn btn-primary" onClick={handleClick}>
                Log Hello World
            </button>

            {/* Background Color to red */}
            <div style={{ backgroundColor: "red", height: "50px", width: "50px" }}> red box </div>
        </div>
    );
}

export default App;
