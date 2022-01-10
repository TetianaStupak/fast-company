import React from "react";
import { useState } from "react/cjs/react.development";
import TextField from "../components/textField";

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
            <TextField
                label="Email"
                name="email"
                value={date.email}
                onChange={handleChange}
            />
            <TextField
                label="Password"
                type="password"
                name="password"
                value={date.password}
                onChange={handleChange}
            />
        </form >
    );
};

export default Login;
