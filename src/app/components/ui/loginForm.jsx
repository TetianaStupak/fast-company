import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import CheckBoxField from "../common/form/checkBoxField";
import * as yup from "yup";

const LoginForm = () => {
    const [data, setDate] = useState({
        email: "",
        password: "",
        stayOn: false
    });
    const [errors, setErrors] = useState({});
    const handleChange = (target) => {
        setDate((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validateShema = yup.object().shape({

        password: yup
            .string()
            .required("Пароль обязательный для заполнения")
            .matches(
                /(?=.*[A-Z])/,
                "Пароль должен содержать хотя бы одну заглавную букву"
            )
            .matches(
                /(?=.*[0-9])/,
                "Пароль должен содержать хотя бы одну цифру"
            )
            .matches(
                /(?=.*[!@#$%^&*])/,
                "Пароль должен содержать один из специльных символов !@#$%^&*"
            )
            .matches(
                /(?=.{8,})/,
                "Пароль должен состоять минимум из 8 символов"
            ),
        email: yup
            .string()
            .required("Электронная пошта обязательна для заполнения")
            .email("Email введен не корректно")
    });
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        validateShema
            .validate(data)
            .then(() => setErrors({}))
            .catch((err) => setErrors({ [err.path]: err.message }));
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Password"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <CheckBoxField
                value={data.stayOn}
                onChange={handleChange}
                name="stayOn"
            >
                Оставаться в системе
            </CheckBoxField>
            <button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto">Submit</button>
        </form >
    );
};

export default LoginForm;
