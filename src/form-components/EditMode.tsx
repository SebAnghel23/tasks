import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <label className="form-switch">
                <input
                    type="checkbox"
                    role="checkbox"
                    checked={isEditMode}
                    onChange={() => setIsEditMode(!isEditMode)}
                />
                <span>Edit Mode</span>
            </label>

            {isEditMode ?
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            role="textbox"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            role="checkbox"
                            name="student"
                            checked={isStudent}
                            onChange={() => setIsStudent(!isStudent)}
                        />
                        Student
                    </label>
                </div>
            :   <p>{`${name} is ${isStudent ? "a" : "not a"} student.`}</p>}
        </div>
    );
}
