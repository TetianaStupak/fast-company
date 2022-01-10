import React from "react";
import { useState } from "react/cjs/react.development";

const Login = () => {
    const [date, setDate] = useState({ email: "", password: "" });

    const handleChange = ({ target }) => {
        setDate((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    return (
        <form action="">
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={date.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={date.password}
                    onChange={handleChange}
                />
            </div>
        </form >
    );
};

export default Login;
