import React from "react";
import { useState } from "react/cjs/react.development";

const Login = () => {
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
        console.log(e.target);
    };
    return (
        <form action="">
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                />
            </div>
            <div>
                <div>
                    <label htmlFor="radio1">Radio 1</label>
                    <input
                        type="radio"
                        id="radio1"
                        name="radio"
                    />
                </div>
                <div>
                    <label htmlFor="radio2">Radio 2</label>
                    <input type="radio" id="radio2" name="radio" />
                </div>
            </div>
        </form >
    );
};

export default Login;
